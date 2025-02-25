### **📌 Quiz Web**  
A **full-stack quiz application** built with **AngularJS (Frontend), Spring Boot (Backend), and MySQL (Database).**  

---

## **📢 Features**
✅ User Registration & Authentication  
✅ Create & Manage Quizzes  
✅ Add Questions to a Quiz  
✅ Submit Tests & Evaluate Scores  
✅ View Test Results  

---

## 🖼️ Screenshots
![Screenshot (401)](https://github.com/user-attachments/assets/59ae295c-8474-45e9-af91-4782490f343b)
![Screenshot (402)](https://github.com/user-attachments/assets/122131bb-b562-4945-b1f3-08871d0c8b4a)
![Screenshot (403)](https://github.com/user-attachments/assets/f5f6cd84-61d6-4af6-bbb0-fb973968901a)
![Screenshot (404)](https://github.com/user-attachments/assets/d0795db8-8449-4ae7-bf9e-ae5a75eace61)
![Screenshot (405)](https://github.com/user-attachments/assets/e6cc9b0d-9646-4649-8ace-00f4dc301f44)
![Screenshot (406)](https://github.com/user-attachments/assets/e696c5ff-b378-4478-9ef6-cc2ed14c0544)
![Screenshot (407)](https://github.com/user-attachments/assets/5db62799-7833-4cc2-b0ef-d5f2cbfedb76)
![Screenshot (408)](https://github.com/user-attachments/assets/5ad7c796-fd5d-49d2-b20e-6e3aa64f8779)
![Screenshot (409)](https://github.com/user-attachments/assets/0ccc2a54-9dd2-4507-b6f3-c9594bb39c05)

---

## **🛠️ Tech Stack**
### **Frontend:**  
- AngularJS  

### **Backend:**  
- Spring Boot  
- Spring Data JPA  
- RESTful APIs  

### **Database:**  
- MySQL  

---

## **🚀 Installation & Setup**  

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/your-repo/quiz-management.git
cd quiz-management
```

### **2️⃣ Backend (Spring Boot) Setup**
#### **📌 Prerequisites:**
- Java 21  
- Spring Boot  
- MySQL  

#### **🔹 Configure Database**
Update `application.properties` with your MySQL credentials:  

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/quizdb
spring.datasource.username=root
spring.datasource.password=yourpassword
spring.jpa.hibernate.ddl-auto=update
```

#### **🔹 Run Spring Boot Server**
```sh
mvn spring-boot:run
```

---

### **3️⃣ Frontend (AngularJS) Setup**
#### **📌 Prerequisites:**
- Node.js  
- Angular CLI  

#### **🔹 Install Dependencies**
```sh
cd frontend
npm install
```

#### **🔹 Run AngularJS Application**
```sh
ng serve
```
App will be available at `http://localhost:4200/`.

---

## **📡 API Endpoints**
### **User Authentication**
- `POST /api/auth/sign-up` → Register a user  
- `POST /api/auth/login` → User login  

### **Quiz Management**
- `POST /api/test/create` → Create a new test  
- `POST /api/test/question` → Add a question to a test  
- `GET /api/test/` → Fetch all tests  
- `GET /api/test/{id}` → Fetch all questions for a test  
- `POST /api/test/submit-test` → Submit a test  

### **Results**
- `GET /api/test/test-result` → Get all test results  
- `GET /api/test/test-result/{id}` → Get results of a specific user  

---

## **📌 Contribution**
Want to contribute? Follow these steps:  
1️⃣ Fork the repository  
2️⃣ Create a new branch (`git checkout -b feature-branch`)  
3️⃣ Commit changes (`git commit -m 'Added new feature'`)  
4️⃣ Push to branch (`git push origin feature-branch`)  
5️⃣ Open a pull request  

---

## **📜 License**
This project is **open-source** and available under the **MIT License**.
