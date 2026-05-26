import RegistrationForm from "./RegistrationForm";

export default function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundImage: "url('https://images.unsplash.com/photo-1503264116251-35a269479413')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <h1 style={{ marginBottom: "1rem", textAlign: "center", color: "#fff" }}>
        User Registration Form
      </h1>
      <div
        style={{
          backdropFilter: "blur(6px)",
          backgroundColor: "rgba(255,255,255,0.85)",
          padding: "2rem",
          borderRadius: "8px",
          boxShadow: "0 0 15px rgba(255,255,255,0.3)"

  }}
>
  <RegistrationForm />
</div>

    </div>
  );
}

