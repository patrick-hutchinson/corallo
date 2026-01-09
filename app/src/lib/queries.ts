export const siteQuery = `*[_type=="site"][0]{
  title,
  description,
  email,
}`;

export const homeQuery = `*[_type=="home"][0]{
  _id,
  introduction,
  animation{
    asset->{
      _id,
      url,
      mimeType,
      size,
      originalFilename,
      extension,
      metadata
    }
  },
  catalogue{
   asset->{
      _id,
      url,
      mimeType,
      size,
      originalFilename,
      extension,
      metadata
    }
  }
}`;
