## Getting Started

Step 1: Clone this repo in your local  and install the packages

```bash
npm i
```

Step 2: Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## TASKS

- [ ] Fix carousel scrolling UI: When navigation buttons are clicked, ensure a new image is shown. Additionally, center the carousel navigation buttons horizontally relative to the image.
- [ ] Replace dummy images by fetching each album of post using "https://jsonplaceholder.typicode.com/albums/1/photos" in /api/v1/posts route.
- [ ] Make the top nav bar sticky during scrolling.
- [ ] Implement functionality to load more posts upon clicking the "Load More" button. Hide the "Load More" button if no posts exist.
- [ ] Display the user's name and email in each post. Show the first letter for both the first and last names.

  ![Screenshot from 2024-05-04 08-35-47](https://github.com/vidyalai/interview-challenge-1/assets/67904627/a1dd3dca-27e8-427b-a6dc-41de00d15df1)

- [ ] Convert `UserList` React class component to functional component and convert `witUserData` HOC (Higher order Component) to a custom React hooks
- [ ] Convert `useWindowWidth` hook to ContextAPI. Declare the ContextAPI globally and access the `isSmallerDevice` property.



## Submission
After you have completed your work, submit a single pull request to the main repo. Detail the changes you have made in this PR.


## Other Evaluation Criteria

- Clarity and consistency of naming conventions.
- Effectiveness of code modularization.
- Adequacy and robustness of error handling mechanisms.
- Efficiency of code optimization techniques.
- Quality and comprehensiveness of code documentation.



