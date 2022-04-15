// firestore
import { doc, updateDoc } from "firebase/firestore";
// react-query
import { useMutation, useQueryClient } from "react-query";
// react-router-dom
import { useNavigate } from "react-router-dom";
// custom routes
import { HOME } from "../../components/Common/routes";

async function updateFirestoreDocument(collectionRef, id, data) {
  /**
   * update a document in firestore collection
   * error will be handled by react query
   */
  const docRef = doc(collectionRef, id);
  return await updateDoc(docRef, data);
}

export function useUpdateDocument(cacheName, collectionRef) {
  /**
   * update a document in firestore collection using fetchfn.
   * react-query will invalidate old local cache and update it with
   * new cache base on the latest data in database.
   */

  // react-router-dom logic
  const navigate = useNavigate();

  const fetchfn = async ({ id, data }) =>
    /**
     * expect input as a object containing id and data
     */
    await updateFirestoreDocument(collectionRef, id, data);

  const client = useQueryClient();

  return useMutation(fetchfn, {
    onSuccess: () => {
      client.invalidateQueries(cacheName);
      // redirect to home page to refresh content
      navigate(HOME);
    },
  });
}
