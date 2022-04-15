// firestore
import { doc, deleteDoc } from "firebase/firestore";
// react-query
import { useMutation, useQueryClient } from "react-query";
// react-router-dom
import { useNavigate } from "react-router-dom";
// custom routes
import { HOME } from "../../components/Common/routes";

async function removeFirestoreDocument(collectionRef, id) {
  /**
   * remove a document in firestore collection
   * error will be handled by react query
   */
  const docRef = doc(collectionRef, id);
  return await deleteDoc(docRef);
}

export function useRemoveDocument(cacheName, collectionRef) {
  /**
   * remove a document with given 'id' from firestore collection.
   * react-query will invalidate old local cache and update it with
   * latest snapshot of database.
   */

  // react-router-dom logic
  const navigate = useNavigate();
  // fetch function
  const fetchfn = async (id) =>
    await removeFirestoreDocument(collectionRef, id);

  const client = useQueryClient();

  return useMutation(fetchfn, {
    onSuccess: () => {
      client.invalidateQueries(cacheName);
      // redirect to home page to refresh content
      navigate(HOME);
    },
  });
}
