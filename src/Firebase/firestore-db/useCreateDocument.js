// firesotore
import { addDoc } from "firebase/firestore";
// react-query
import { useMutation, useQueryClient } from "react-query";
// react-router-dom
import { useNavigate } from "react-router-dom";
// custom routes
import { HOME } from "../../components/Common/routes";

async function createFirestoreDocument(collectionRef, data) {
  /**
   * create a document in firestore collection
   * error will be handled by react-query
   *
   */
  return await addDoc(collectionRef, data);
}

export function useCreateDocument(cacheName, collectionRef) {
  /**
   * create a new document with  id generated automatically
   * by firestore
   * react-query will invalidate old local cache and update it with
   * new cache base on the latest data in database.
   */

  // react-router-dom logic
  const navigate = useNavigate();
  // fetch function
  const fetchfn = async (data) =>
    await createFirestoreDocument(collectionRef, data);

  const client = useQueryClient();

  return useMutation(fetchfn, {
    onSuccess: () => {
      // invalidate cache
      client.invalidateQueries(cacheName);
      // redirect to home page
      navigate(HOME);
    },
  });
}
