const { default: Header } = require("@/components/Header");

const L = ({ children }) => {
  return (
    <main>
      <Header />
      {children}
    </main>
  );
};

export default L;
