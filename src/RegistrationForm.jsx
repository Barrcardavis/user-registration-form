import { useForm } from "react-hook-form";

export default function RegistrationForm() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful }
  } = useForm();

  const onSubmit = async (data) => {
    // Simulate server delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Submitted:", data);

    reset(); // Clear form after success
  };

  const inputStyle = {
    padding: "0.4rem",
    borderRadius: "4px",
    border: "1px solid #ccc",
    backgroundColor: "#f0f4f8", // cool gray-blue
    width: "100%"
  };

  const password = watch("password");

  return (
    <div style={{ width: "100%" }}>
      {/* Success Message */}
      {isSubmitSuccessful && (
        <p style={{ color: "limegreen", fontWeight: "bold", textAlign: "center" }}>
          Registration successful!
        </p>
      )}

      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          maxWidth: "320px"
        }}
      >
        {/* Full Name */}
        <div>
          <label htmlFor="fullName">Full Name</label>
          <input
            id="fullName"
            style={inputStyle}
            {...register("fullName", {
              required: "Full name is required",
              minLength: {
                value: 3,
                message: "Full name must be at least 3 characters"
              }
            })}
          />
          {errors.fullName && (
            <p style={{ color: "red" }}>{errors.fullName.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            style={inputStyle}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email address"
              }
            })}
          />
          {errors.email && (
            <p style={{ color: "red" }}>{errors.email.message}</p>
          )}
        </div>

        {/* Password */}
        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            style={inputStyle}
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters"
              }
            })}
          />
          {errors.password && (
            <p style={{ color: "red" }}>{errors.password.message}</p>
          )}
        </div>

        {/* Confirm Password */}
        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            id="confirmPassword"
            type="password"
            style={inputStyle}
            {...register("confirmPassword", {
              required: "Please confirm your password",
              validate: (value) =>
                value === password || "Passwords do not match"
            })}
          />
          {errors.confirmPassword && (
            <p style={{ color: "red" }}>{errors.confirmPassword.message}</p>
          )}
        </div>

        {/* Role */}
        <div>
          <label htmlFor="role">Role / Account Type</label>
          <select
            id="role"
            style={inputStyle}
            defaultValue=""
            {...register("role", {
              required: "Please select a role"
            })}
          >
            <option value="">Select a role...</option>
            <option value="Developer">Developer</option>
            <option value="Designer">Designer</option>
            <option value="Product Manager">Product Manager</option>
          </select>
          {errors.role && (
            <p style={{ color: "red" }}>{errors.role.message}</p>
          )}
        </div>

        {/* Terms */}
        <div>
          <label style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <input
              type="checkbox"
              style={{ transform: "scale(1.2)" }}
              {...register("terms", {
                required: "You must agree to the terms"
              })}
            />
            I agree to the Terms & Conditions
          </label>
          {errors.terms && (
            <p style={{ color: "red" }}>{errors.terms.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          style={{
            padding: "0.5rem",
            borderRadius: "4px",
            backgroundColor: "#0078ff",
            color: "white",
            border: "none",
            cursor: "pointer"
          }}
        >
          {isSubmitting ? "Registering..." : "Register"}
        </button>
      </form>
    </div>
  );
}
