const CopyToClipboard = (value) => {
    navigator.clipboard.writeText(value)
      .then(() => {
        // Clipboard copied successfully, handle any desired logic here
      })
      .catch((error) => {
        console.error('Copy to clipboard failed:', error);
      });
  };

  export default CopyToClipboard;