import { createCountry, getCountries } from "@services/api";

export default function TestAuth() {
  const handlePostCountry = async () => {
    const newCountry = await createCountry("Suisse");
    console.log("@POST: country", newCountry);
  };
  const handleGetCountries = async () => {
    const countries = await getCountries();
    console.log("@GET: countries", countries);
  };

  return (
    <div>
      <button onClick={handleGetCountries}>get a country</button>
      <button onClick={handlePostCountry}>post a country</button>
    </div>
  );
}
