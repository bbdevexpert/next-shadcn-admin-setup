"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import CommonInput from "../common/CommonInput";
import CommonTextarea from "../common/CommonTextarea";

export default function CreateTestimonial() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchId = searchParams.get("id");
  const [formData, setFormData] = useState({
    name: "",
    review: "",
    rating: 5,
    position: "",
    image: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_APIURL2}/api/testimonials/create`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to create Testimonials");
      }
      setSuccessMessage("Testimonial created successfully!");
      setFormData({
        name: "",
        review: "",
        rating: 0,
        position: "",
        image: "",
      });

      router.push("/mgt/testimonials");
    } catch (err) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {}, [searchId]);

  return (
    <>
      <div className="max-w-2xl">
        <form onSubmit={handleSubmit}>
          <div className="flex justify-between mb-2">
            <div className="text-lg font-semibold">Create Testimonial</div>
            <div className="flex justify-end gap-2">
              <Button
                size="sm"
                variant="secondary"
                onClick={() => router.back()}
              >
                cancle
              </Button>
              <Button
                size="sm"
                type="submit"
                disabled={loading}
                className={` ${loading ? "bg-gray-400" : ""} `}
              >
                {" "}
                {loading ? "saving..." : "save"}
              </Button>
            </div>
          </div>
          <div className="grid gap-5 p-5 bg-white border rounded ">
            <div className="grid  gap-5">
              <div>
                <CommonInput
                  label="Name"
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <CommonInput
                  label="Positions"
                  type="text"
                  id="position"
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                />
              </div>
              <div>
                <CommonInput
                  label="Rating"
                  type="number"
                  id="rating"
                  name="rating"
                  value={formData.rating}
                  onChange={handleChange}
                  min="1"
                  max="5"
                />
              </div>
              <div>
                <CommonInput
                  label="Image URL"
                  type="text"
                  id="image"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                />
              </div>
              <div className="">
                <CommonTextarea
                  label="Message"
                  id="review"
                  name="review"
                  value={formData.review}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
