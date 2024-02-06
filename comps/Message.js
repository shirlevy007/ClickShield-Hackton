import { useState } from "react";
import Modal from "./Modal.js";
import styles from "../styles/Message.module.css";

const Message = () => {
  //init values to all state variables
  const [message, setMessage] = useState("");
  const [isPending, setIsPending] = useState(false);
  const [open, setOpen] = useState(false);
  const [stringValid, setStringValid] = useState("");

  let isValidUrl = true;
  let isValid = true;
  let isValidText = true;

  const handleClose = () => {
    //clean the text box and the values of the state variables
    setMessage("");
    isValidText = true;
    isValidUrl = true;
    isValid = true;
    setIsPending(false);

    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleCheck = (e) => {
    e.preventDefault();
    setIsPending(true);

    //extract urls from message into array
    const urlsToCheck =
      message.match(
        /\b((https?|ftp|file):\/\/|(www|ftp)\.)[\S|$!:,.;]*[\S|$]/gi,
      ) || []; // If null, default to an empty array
    const apiKey = "AIzaSyBdhhS0iwOsUd6rg6qDhOt5VMJTHR_64c0";
    const apiUrl = `https://safebrowsing.googleapis.com/v4/threatMatches:find?key=${apiKey}`;

    const requestData = {
      client: {
        clientId: "ClickShield",
        clientVersion: "1.0.0",
      },
      threatInfo: {
        threatTypes: ["MALWARE", "SOCIAL_ENGINEERING", "UNWANTED_SOFTWARE"],
        platformTypes: ["ANY_PLATFORM"],
        threatEntryTypes: ["URL"],
        threatEntries:
          urlsToCheck.length > 0
            ? urlsToCheck.map((url) => ({ url: url }))
            : [],
      },
    };

    //-------------------- Fetch And Process Data -------------------------
    async function fetchAndProcessData() {
      try {
        const response = await fetch(apiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestData),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        const maliciousUrls = data.matches;
        if (typeof maliciousUrls !== "undefined") {
          console.log(data.matches);
          return false; // Return false if malicious URLs are found
        } else {
          return true; // Return true if no malicious URLs are found
        }
      } catch (error) {
        console.error("Error:", error);
        return false; // Return false if an error occurs
      }
    }

    //-------------------- Fetch And Process Text -------------------------
    async function fetchAndProcessText() {
      const url = "https://grammarbot.p.rapidapi.com/check";
      const options = {
        method: "POST",
        headers: {
          "content-type": "application/x-www-form-urlencoded",
          "X-RapidAPI-Key":
            "14627c5a28mshb69c810e41d31c9p100907jsn8814734ce6e9",
          "X-RapidAPI-Host": "grammarbot.p.rapidapi.com",
        },
        body: new URLSearchParams({
          text: message,
          language: "en-US",
        }),
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        if (result.matches.length > 0)
          return false; // Return false becauase there are mistakes
        else if (result.matches.length === 0) return true; // Return true becauase there are no mistakes
      } catch (error) {
        console.error(error);
        return false; // Return false if an error occurs
      }
    }

    //-------------------- checking if the Text and Url are valid---------

    (async () => {
      isValidUrl = await fetchAndProcessData();
      isValidText = await fetchAndProcessText();
      isValid = isValidText && isValidUrl;
      if (isValid) {
        setStringValid("VALID");
      } else {
        setStringValid("MALICIOUS");
      }
      handleOpen();
    })();
  };

  return (
    <div className="message">
      <title>ClickShield | Home</title>
      <link
        rel="shortcut icon"
        type="x-icon"
        href="./clickshiled_logo.jpeg"
      ></link>
      <h2 className={styles.enter_massage}> Enter Your Message </h2>
      <form onSubmit={handleCheck}>
        <textarea
          placeholder="Enter your message here.."
          requierd
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        {!isPending && <button className={styles.button}>Check Message</button>}
        {isPending && (
          <button className={styles.button}>Checking Message...</button>
        )}
      </form>
      <Modal isOpen={open} onClose={handleClose} stringValid={stringValid}>
        <>
          <h1 className={styles.modal_window}>This message is {stringValid}</h1>
        </>
      </Modal>
    </div>
  );
};

export default Message;
