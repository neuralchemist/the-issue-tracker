// react-query
import { useQuery } from "react-query";
// firestore
import { getDocs } from "@firebase/firestore";

async function getFirestoreCollection(collectionRef) {
  /**
   * fetch collection from firestore
   * error will be handled by react-query
   */
  const snapshots = await getDocs(collectionRef);
  // extract data from snapshots and add id
  const results = snapshots.docs.map((snapshot) => ({
  // snapshot.data() is never undefined for query doc snapshots
    ...snapshot.data(),
    id: snapshot.id,
  }));
  return results;
}

export function useGetCollection(cacheName, collectionRef) {
  /**
   * get all documents  from a firestore collection using  the fetchfn
   * useQuery cache collection  in local cache
   */
  const fetchfn = async () => await getFirestoreCollection(collectionRef);
  return useQuery(cacheName, fetchfn);
}
