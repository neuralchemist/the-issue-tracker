// firestore
import { collection } from "firebase/firestore";
// firebase
import { db } from "../../../Firebase/firebase-config";
// custom hooks
import { useRemoveDocument } from "../../../Firebase/firestore-db";

/**
 * remove issue from issue collection in firestore.
 * trigger react-query cache update
 */

// firbase
const collectionName = "issues";
const collectionRef = collection(db, collectionName);
// react query
const cacheName = collectionName;


export function useRemoveIssue(){
	/**
	 * remove document with given id from 'issues' collection.
	 * invalidate and update cache with cache name 'issues'.
	 */
	return useRemoveDocument(cacheName, collectionRef)

}