import { useState } from "react";

function ProfileUpdateForm() {
  const [profile, setProfile] = useState({ name: "", job: "", bio: "" });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form>
        <input name="name" placeholder="Name" value={profile.name} onChange={handleChange} />
        <input name="job" placeholder="Job" value={profile.job} onChange={handleChange} />
        <textarea name="bio" placeholder="Bio" value={profile.bio} onChange={handleChange}></textarea>
      </form>

      <h3>Live Preview</h3>
      <p><strong>Name:</strong> {profile.name}</p>
      <p><strong>Job:</strong> {profile.job}</p>
      <p><strong>Bio:</strong> {profile.bio}</p>
    </div>
  );
}