import { useState, useEffect } from "react";
import apodImg from '../../assets/images/apod/apod.jpg'


export const NasaAPOD = () => {
  const [apod, setApod] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const[image, setImage] = useState(apod)

  useEffect(() => {
    const fetchAPOD = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.nasa.gov/planetary/apod?api_key=tBwPAHPy1U4WLFKwigGrHp7SUGlYSSojJbDSrh3X`
        );

        if (!response.ok) {
          setApod(apodImg)
        }

        const data = await response.json();
        setApod(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAPOD();
  }, []);

  if (loading) return (
  <div className="text-white/40 py-4 text-sm ">Magic Happening...</div>
);
  if (error) return(
    <div className="max-w-xl mx-auto p-4 text-white">
      <h1 className="text-xs  mb-1">Mars Marathon by Perseverance</h1>

      <div className="w-full overflow-hidden rounded-lg mb-4">
     
          <img
            src={apodImg}
            alt="Mars Marathon by Perseverance"
            className="w-full h-auto object-cover"
          />
      </div>
    </div>
  );
  if (!apod) return null;

  return (
    <div className="max-w-xl mx-auto p-4 text-white">
      <h1 className="text-xs  mb-1">{apod.title}</h1>
      <p className="text-white/40 text-sm mb-3">
        {apod.date} {apod.copyright && `· © ${apod.copyright}`}
      </p>

      <div className="w-full overflow-hidden rounded-lg mb-4">
        {apod.media_type === "video" ? (
          <iframe
            src={apod.url}
            title={apod.title}
            className="w-full aspect-video"
            allowFullScreen
          />
        ) : (
          <img
            src={apod.hdurl || apod.url}
            alt={apod.title}
            className="w-full h-auto object-cover"
          />
        )}
      </div>
    </div>
  );
};