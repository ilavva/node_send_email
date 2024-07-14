To run test.rest using the REST Client extension in Visual Studio Code, follow these steps:

1. _Install the REST Client extension_: If you haven't already, install the REST Client extension from the Visual Studio Code marketplace.

   - Open Visual Studio Code.
   - Go to the Extensions view by clicking on the Extensions icon in the Activity Bar on the side of the window or by pressing Ctrl+Shift+X.
   - Search for "REST Client" and install the extension developed by Huachao Mao.

2. **Create and open test.rest**:

   - Create a new file named test.rest or test.http.
   - Open this file in Visual Studio Code.
   - Add your test cases to this file.

3. _Write your test cases_: Here is an example of how to write the test cases in test.rest:

   http

   ### Test Send Mail - Success

   POST http://localhost:3000/sendMail
   Content-Type: application/json

   {
   "email": "test@example.com",
   "subject": "Test Subject",
   "text": "This is a test email."
   }

   ### Test Send Mail - Missing Subject

   POST http://localhost:3000/sendMail
   Content-Type: application/json

   {
   "email": "test@example.com",
   "text": "This is a test email."
   }

   ### Test Send Mail - Invalid Email

   POST http://localhost:3000/sendMail
   Content-Type: application/json

   {
   "email": "invalid-email",
   "subject": "Test Subject",
   "text": "This is a test email."
   }

   ### Test Send Mail - Missing Email

   POST http://localhost:3000/sendMail
   Content-Type: application/json

   {
   "subject": "Test Subject",
   "text": "This is a test email."
   }

4. _Run the tests_:

   - In the test.rest file, you will see a "Send Request" link above each HTTP request. Click on this link to send the request.

     ![Send Request](https://user-images.githubusercontent.com/46651533/133436507-88d4e890-9ebd-4d65-93f0-4eb0ae25c95d.png)

   - The response will appear in a new tab within Visual Studio Code, allowing you to verify the result.

5. _View the response_: Each response will be shown in a separate tab, where you can see the status code, headers, and body of the response.

By following these steps, you can easily run and test your RESTful endpoints directly within Visual Studio Code using the REST Client extension. This approach provides a convenient and efficient way to manually test your API endpoints without leaving your development environment.
