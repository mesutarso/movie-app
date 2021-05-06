import React from "react";
import { NewsletterContainerStyle } from "../styles/NewsletterContainerStyle";

export default function NewsletterContainer() {
  return (
    <NewsletterContainerStyle>
      <h2>NewsLetter</h2>
      <form action="" method="post">
        <input type="text" name="newsletter" id="newsletter" />
        <button type="submit">S'abonner</button>
      </form>
    </NewsletterContainerStyle>
  );
}
