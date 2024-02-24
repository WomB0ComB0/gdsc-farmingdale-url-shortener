import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "@/core/firebase";
import { Head } from "@/shared/Head";
import { toast } from "sonner";

export const Slug = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [url, setUrl] = useState("");

  useEffect(() => {
    const fetchUrl = async () => {
      const docRef = doc(db, "urls", slug!);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setUrl(docSnap.data().url);
        navigate(url);
      } else {
        toast.error("No such document!");
        navigate("/");
      }
    };

    fetchUrl();
  }, [slug, navigate, url]);

  return (
    <>
      <Head
        title={`Redirecting`}
        description={`Redirecting`}
      />
    </>
  )
}