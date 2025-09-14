function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#333",
        color: "white",
        textAlign: "center",
        padding: "15px",
        marginTop: "20px"
      }}
    >
      <p>© {new Date().getFullYear()} My Company. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
