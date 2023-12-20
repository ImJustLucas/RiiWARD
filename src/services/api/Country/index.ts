import { supabase } from "@services/Supabase";

export async function getCountries() {
  // const supabase = createServerSupabaseClient();
  try {
    const { data: countries } = await supabase.from("country").select("*");
    return countries;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}

export async function createCountry(countryName: string) {
  // const supabase = createServerSupabaseClient();
  try {
    const { data: country, error } = await supabase
      .from("country")
      .insert([{ country_name: countryName }]);
    return { country, error };
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}
