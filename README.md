# User Registration Form (React Hook Form)

A simple, accessible, and fully validated user registration form built using **React** and **React Hook Form**.  
This project demonstrates form validation, error handling, async submission simulation, and clean UI layout.

---

## 🚀 Features

- Fully controlled form using **React Hook Form**
- Field validation:
  - Full Name (required, min 3 chars)
  - Email (required, must match email pattern)
  - Password (required, min 6 chars)
  - Confirm Password (must match Password)
  - Role selection (required)
  - Terms & Conditions checkbox (required)
- Async form submission with loading state
- Success message using `isSubmitSuccessful`
- Automatic form reset after successful submit
- Clean UI with spacing, padding, and styled inputs
- Background image with centered form layout

---

## 🧰 Tech Stack

- **React**
- **React Hook Form**
- **Vite** (development environment)

---

## 📋 Validation Rules

| Field | Rules |
|-------|-------|
| **Full Name** | Required, minimum 3 characters |
| **Email** | Required, must match email regex pattern |
| **Password** | Required, minimum 6 characters |
| **Confirm Password** | Must match Password field |
| **Role** | Required (must select an option) |
| **Terms** | Required (checkbox must be checked) |

---

## 🖼️ Screenshots

> Add your screenshots here  
> Example:
> - `screenshot-form.png`
> - `screenshot-success.png`

---

## ▶️ How to Run the Project

1. Clone the repository:
   ```bash
   git clone <your-repo-url>

Install dependencies:

<img width="545" height="109" alt="image" src="https://github.com/user-attachments/assets/fbf5541e-4001-4426-9bb7-4efe522c08b3" />

Start the development server:

<img width="551" height="108" alt="image" src="https://github.com/user-attachments/assets/00a89ee5-aba2-4586-b0b8-91fad498ca95" />

Open the app in your browser:

<img width="557" height="112" alt="image" src="https://github.com/user-attachments/assets/db707a77-dc22-4b35-a407-f6bdb47786be" />

🧪 How the Form Works
1. User fills out all fields
Validation errors appear immediately under each field.

2. User clicks Register
Button changes to "Registering…"

Form is disabled

1.5 second simulated server delay runs

3. On success
Form resets

Green success message appears

Submitted data logs to the console

📁 Project Structure

<img width="594" height="183" alt="image" src="https://github.com/user-attachments/assets/39134693-84a1-440a-9ec4-4c02a768a373" />

📝 Notes for the Instructor
No useState is used for form control (per assignment rules)

Success state uses isSubmitSuccessful from React Hook Form

Form reset uses reset() after async submission

All validation rules are implemented inside register()

UI is styled inline for clarity and simplicity

## 🧪 Test Cases

Below are the required **six test cases** (3 normal + 3 edge cases) demonstrating validation behavior and successful form submission.

---

### ✅ Normal Test Cases

#### **Test Case 1 — Valid Registration**
**Input:**
- Full Name: "David Davis"
- Email: "david@example.com"
- Password: "abcdef"
- Confirm Password: "abcdef"
- Role: "Developer"
- Terms: checked

**Expected Result:**  
Form submits successfully, shows green “Registration successful!” message, and resets fields.

---

#### **Test Case 2 — Valid Designer Account**
**Input:**
- Full Name: "Sarah Lee"
- Email: "sarah.lee@test.com"
- Password: "mypassword"
- Confirm Password: "mypassword"
- Role: "Designer"
- Terms: checked

**Expected Result:**  
Successful submission with success message and form reset.

---

#### **Test Case 3 — Valid Product Manager Registration**
**Input:**
- Full Name: "John Smith"
- Email: "john.smith@company.com"
- Password: "123456"
- Confirm Password: "123456"
- Role: "Product Manager"
- Terms: checked

**Expected Result:**  
Successful submission and form reset.

---

### ⚠️ Edge Test Cases

#### **Edge Case 1 — Passwords Do Not Match**
**Input:**
- Password: "abcdef"
- Confirm Password: "abc123"

**Expected Result:**  
Error message: **“Passwords do not match”**  
Form does NOT submit.

---

#### **Edge Case 2 — Invalid Email Format**
**Input:**
- Email: "notanemail"

**Expected Result:**  
Error message: **“Enter a valid email address”**  
Form does NOT submit.

---

#### **Edge Case 3 — Terms Not Checked**
**Input:**
- All fields valid  
- Terms checkbox **not checked**

**Expected Result:**  
Error message: **“You must agree to the terms”**  
Form does NOT submit.

---

### ✔️ Summary Table

| Test Case | Type | Expected Result |
|----------|------|-----------------|
| Valid Registration | Normal | Success message + reset |
| Valid Designer Account | Normal | Success message + reset |
| Valid Product Manager | Normal | Success message + reset |
| Password Mismatch | Edge | Error: passwords do not match |
| Invalid Email | Edge | Error: invalid email format |
| Terms Not Checked | Edge | Error: must agree to terms |



✔️ Status
Completed and fully functional.
