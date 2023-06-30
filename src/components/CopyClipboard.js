const CopyToClipboard = (value) => {
    navigator.clipboard.writeText(value)
      .then(() => {
      })
      .catch((error) => {
        console.error('Copy to clipboard failed:', error);
      });
  };

  export default CopyToClipboard;