"use client";

const DownloadCatalogue = ({ file }) => {
  if (!file?.asset?.url) return null;

  return (
    <a href={file.asset.url} download className="button" style={{ cursor: "pointer" }}>
      DOWNLOAD CATALOGUE
    </a>
  );
};

export default DownloadCatalogue;
