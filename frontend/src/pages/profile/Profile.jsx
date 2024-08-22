import ErrorBlock from "@/components/custom/ErrorBlock";
import SectionWrapper from "@/components/custom/SectionWrapper";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Loader } from "lucide-react";
import React, { useEffect, useState } from "react";

const Profile = () => {
  const [error, setError] = useState(false);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const res = await fetch("http://localhost:8000/api/profile");
        const data = await res.json();
        setProfile(data);
        setError(false);
        setLoading(false);
      } catch (error) {
        setError(true);
      }
    })();
  }, []);

  if (error) return <ErrorBlock />;

  if (loading)
    return (
      <div className="text-center px-10 py-20">
        <Loader className="animate-spin mx-auto text-muted-foreground" />
      </div>
    );

  return (
    profile && (
      <SectionWrapper>
        <Card className="max-w-sm mx-auto">
          <CardHeader className="max-w-48 relative mx-auto px-0 aspect-square">
            <img
              src={profile.image}
              className=" aspect-square object-cover object-center rounded-full"
              alt=""
            />
          </CardHeader>
          <CardContent className="text-center">
            <CardTitle className="text-lg text-foreground">
              {profile.name}
            </CardTitle>
            <p className="text-muted-foreground font-bold">
              {profile.location}
            </p>
            <CardDescription>{profile.description}</CardDescription>
          </CardContent>
        </Card>
      </SectionWrapper>
    )
  );
};

export default Profile;
