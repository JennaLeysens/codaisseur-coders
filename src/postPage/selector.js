export default function selectPostAndComments(reduxStore) {
  console.log("selector", reduxStore.postPage);
  return reduxStore.postPage;
}
