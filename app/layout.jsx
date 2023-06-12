import "@styles/globals.css";

export const metadata = {
  title: "next_prompts",
  description: "discover and share ai prompts",
};

const RootLayout = ({children}) => {
  
  return (
    <html lang="eng">
      <body>
        <div className="main">
          <div className="gradient"></div>
        </div>
        <main className="app">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
