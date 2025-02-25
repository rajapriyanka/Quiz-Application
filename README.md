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
![Screenshot (401)](https://github.com/user-attachments/assets/e73fe4ec-ea8b-44bf-8abf-f52ffd525439)

![Screenshot (402)](https://github.com/user-attachments/assets/1a7d28a5-49e2-4d9f-80a4-dee6ab956f97)

![Screenshot (403)](https://github.com/user-attachments/assets/66e2f61e-326e-4b85-8334-d0239edf1487)

![Screenshot (404)](https://github.com/user-attachments/assets/3987ae7d-b76f-4572-9b51-d32cdbd5aded)

![Screenshot (405)](https://github.com/user-attachments/assets/7adf5455-e7db-4338-9582-60aa2deb6d9f)

![Screenshot (406)](https://github.com/user-attachments/assets/65ed77a1-3140-4e01-ba25-edfbedc4f646)

![Screenshot (407)](https://github.com/user-attachments/assets/0dd3c5ac-9005-4b95-bb40-200c3dfb1739)

![Screenshot (408)](https://github.com/user-attachments/assets/31c9489b-b898-442d-b98c-d103a9f47115)

![Screenshot (409)](https://github.com/user-attachments/assets/56d57662-eca9-442e-86bf-d8873ec556be)

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
