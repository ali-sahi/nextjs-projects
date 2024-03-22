"use client";
import {
  createNewTour,
  fetchUserTokensById,
  generateTourResponse,
  getExistingTour,
  subtractTokens,
} from "@/utils/actions";
import TourInfo from "./TourInfo";
import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuth } from "@clerk/nextjs";

const NewTour = () => {
  const queryClient = useQueryClient();
  const { userId } = useAuth();
  const {
    mutate,
    isPending,
    data: tour,
  } = useMutation({
    mutationFn: async (destination) => {
      const existingTour = await getExistingTour(destination);
      if (existingTour) return existingTour;

      // -------- checking tokens -----------

      const currentTokens = await fetchUserTokensById(userId);

      if (currentTokens < 200) {
        toast.error("Token balance too low...");
        return;
      }

      // -------- checking tokens -----------

      const newTour = await generateTourResponse(destination);

      if (!newTour) {
        toast.error("No matching city found...");
        return null;
      }

      const response = await createNewTour(newTour.tour);
      queryClient.invalidateQueries({ queryKey: ["tours"] });

      // -------- subtracting tokens -----------
      const newTokens = await subtractTokens(userId, newTour.tokens);
      // -------- subracting tokens -----------

      toast.success(`${newTokens} tokens remaining...`);
      return newTour.tour;
    },
  });
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const destination = Object.fromEntries(formData.entries());
    mutate(destination);
  };

  if (isPending) {
    return <span className="loading loading-lg"></span>;
  }
  return (
    <>
      <form onSubmit={handleSubmit} className="max-w-2xl">
        <h2 className=" mb-4">Select your dream destination</h2>
        <div className="join w-full">
          <input
            type="text"
            className="input input-bordered join-item w-full"
            placeholder="city"
            name="city"
            required
          />
          <input
            type="text"
            className="input input-bordered join-item w-full"
            placeholder="country"
            name="country"
            required
          />
          <button
            className="btn btn-primary join-item"
            type="submit"
            disabled={isPending}
          >
            {isPending ? "please wait..." : "generate tour"}
          </button>
        </div>
      </form>
      <div className="mt-16">
        <div className="mt-16">{tour ? <TourInfo tour={tour} /> : null}</div>
      </div>
    </>
  );
};
export default NewTour;
