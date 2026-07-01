# Alkhateeb Apiary Web Project Spec

A clean, responsive static website designed to showcase and sell premium, single-source Jordanian honey harvests. Built with future scalability for dynamic e-commerce in mind.

---

## 🛠️ Tech Stack & Architecture
* **Phase 1:** Static Frontend (HTML5, Tailwind CSS / Angular skeleton)
* **Phase 2 (Future):** Full-stack integration with Node.js & MongoDB database

---

## 📋 Core Website Requirements

### 1. Structure & Pages
* **Home Page:** Introduction to the apiary, seasonal highlights, and quick access to harvests.
* **About Us Page:** The story of our bee yards, transitioning from the mountains of Jordan straight to the consumer's table.
* **Products Page:** Detailed catalog of honey varieties.
* **Cart / Order Page:** Multi-product collection and checkout form.

### 2. Product Page Features
Each product listing must dynamically or statically render:
* **Image Gallery:**
    * Premium honey jar shot (with custom sealing sticker layout).
    * The source plant/flower (e.g., Mountain wild flora, Centaurea, Eucalyptus).
* **Harvest Availability Indicator:**
    * 🟢 **Green Bar/Knob:** Fairly available.
    * 🟡 **Yellow Bar/Knob:** Quantity below half.
    * 🔴 **Red Bar/Knob:** Limited stock left ("Order quickly!").
* **Action:** "Add to Cart" button.

### 3. Shopping Cart & Checkout Flow
* **Cart Persistence:** Ability to add multiple honey varieties with custom quantities.
* **Checkout Form Fields:**
    * Customer Full Name
    * Mobile Number
    * Delivery Address & Location Drop
* **Phase 1 Order Processing:** A "Submit Order" button that compiles the cart data and customer details, sending it directly via a structured message link (e.g., WhatsApp pre-filled link) to handle logistics manually.

TODO: 
We need to add Crystallization rate
We need to add main flower that affect this honey 
We need to add 1 kilo and 1/2 kilo