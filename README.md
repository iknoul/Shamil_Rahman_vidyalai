## Getting Started

First, install packages

```bash
npm i
```

then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## TASKS

- [ ] Fix carousel scrolling UI: When navigation buttons are clicked, ensure a new image is shown. Additionally, center the carousel navigation buttons horizontally relative to the image.
- [ ] Replace dummy images by fetching each albums of page using "https://jsonplaceholder.typicode.com/albums/1/photos" in /api/v1/posts route.
- [ ] Make the top nav bar sticky during scrolling.
- [ ] Implement functionality to load more posts upon clicking the "Load More" button. Hide the "Load More" button if no posts exist.
- [ ] Display the user's name and email in each post. Show the first letter for both the first and last names.

  ![Screenshot from 2024-05-04 08-35-47](https://github.com/vidyalai/interview-challenge-1/assets/67904627/a1dd3dca-27e8-427b-a6dc-41de00d15df1)

- [ ] Convert `UserList` React class component to functional component and convert `witUserData` HOC (Higher order Component) to a custom React hooks
- [ ] Implement ContextAPI to switch between light and dark mode globally.
