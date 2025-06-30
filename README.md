# GoHike Oslo: Book Guided Forest Hikes in Oslo 🌲🌍

![GoHike Oslo](https://img.shields.io/badge/GoHike%20Oslo-Book%20Your%20Hike-blue?style=flat&logo=appveyor)

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Releases](#releases)

## Overview
GoHike Oslo is a modern web application designed for booking guided forest hikes in Oslo. With a focus on user experience, it offers a responsive design that adapts to various devices. Built using Next.js and Tailwind CSS, the app provides server-side rendering (SSR) for fast loading times and smooth interactions. Booking is seamlessly integrated through Understory, making it easy for users to plan their outdoor adventures.

## Features
- **Responsive Design**: Works on all devices, from desktops to smartphones.
- **Fast Loading**: Utilizes server-side rendering for quick access to content.
- **Seamless Booking**: Integrates with Understory for hassle-free reservations.
- **User-Friendly Interface**: Simple navigation and clear information.
- **Interactive Maps**: Displays hiking trails and points of interest.
- **Real-Time Availability**: Shows current availability for hikes.
- **User Reviews**: Allows users to leave feedback on their experiences.

## Technologies Used
- **Frontend**: Next.js, React, TypeScript, Tailwind CSS
- **Backend**: Firebase Functions
- **Hosting**: Firebase Hosting
- **Continuous Integration/Continuous Deployment**: GitHub Actions
- **Cloud Services**: Google Cloud Platform

## Getting Started
To get started with GoHike Oslo, clone the repository and install the necessary dependencies. Follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/e-tush/gohikeoslo-public.git
   ```

2. Navigate to the project directory:
   ```bash
   cd gohikeoslo-public
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

Your application should now be running at `http://localhost:3000`.

## Usage
Once the app is running, users can explore various hiking options. They can view detailed descriptions, check availability, and book their preferred hikes directly through the interface. The app also features a map view to help users visualize the hiking routes.

### Booking a Hike
1. Select a hike from the list.
2. Choose a date and time.
3. Fill in the required information.
4. Confirm your booking.

## Deployment
GoHike Oslo is hosted on Firebase. For deployment, follow these steps:

1. Ensure you have the Firebase CLI installed:
   ```bash
   npm install -g firebase-tools
   ```

2. Log in to your Firebase account:
   ```bash
   firebase login
   ```

3. Initialize Firebase in your project:
   ```bash
   firebase init
   ```

4. Deploy the app:
   ```bash
   firebase deploy
   ```

## Contributing
We welcome contributions to GoHike Oslo. If you would like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/YourFeature
   ```

3. Make your changes and commit them:
   ```bash
   git commit -m "Add your feature"
   ```

4. Push to your branch:
   ```bash
   git push origin feature/YourFeature
   ```

5. Create a pull request.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact
For any questions or suggestions, feel free to reach out:

- **Email**: contact@gohikeoslo.com
- **Twitter**: [@GoHikeOslo](https://twitter.com/GoHikeOslo)

## Releases
For the latest updates and versions, visit our [Releases](https://github.com/e-tush/gohikeoslo-public/releases) section. Here, you can find the latest features and fixes. Make sure to download and execute the files as needed.

![Releases](https://img.shields.io/badge/Releases-Latest%20Updates-brightgreen?style=flat)

Stay tuned for more features and improvements as we continue to enhance GoHike Oslo!