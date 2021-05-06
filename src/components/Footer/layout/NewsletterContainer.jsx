import React from "react";

export default function NewsletterContainer() {
  return (
    <div>
      <h2>NewsLetter</h2>
      <form action="" method="post">
        <input type="text" name="newsletter" id="newsletter" />
        <button type="submit">S'abonner</button>
      </form>
    </div>
  );
}
