"use client";

const DownloadCatalogue = ({ file, className }) => {
  if (!file?.asset?.url) return null;

  return (
    <a href={file.asset.url} download className={`${className} button`} style={{ cursor: "pointer" }}>
      DOWNLOAD CATALOGUE
    </a>
  );
};

export default DownloadCatalogue;
