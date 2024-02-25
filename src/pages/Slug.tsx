import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getDocs, query, collection, where } from "firebase/firestore";
import { db } from "@/core/firebase";
import { Head } from "@/shared/Head";
import { toast } from 'sonner';

export const Slug = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [url, setUrl] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = collection(db, "urls");
        const q = query(docRef, where('slug', "==", slug));
        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) {
          toast.error('Error: No such document!');
          navigate('/');
          return;
        }

        querySnapshot.forEach((doc) => {
          const finalUrl = doc.data().url;
          setUrl(finalUrl ?? 'No final url');
          window.location.replace(url);
        });
      } catch (error) {
        toast.error(`Error getting documents`,);
      }
    };

    fetchData();
  }, [navigate, slug, url]);

  return (
    <>
      <Head
        title={`Redirecting`}
        description={`Redirecting`}
      />
    </>
  );
};
