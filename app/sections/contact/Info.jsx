const Info = () => {
  return (
    <div className="flex flex-col gap-2 lg:gap-4">
      <div>
        <div className="label">Email</div>
        <a href="mailto:muhammedbinramli@gmail.com">
          muhammedbinramli@gmail.com
        </a>
      </div>
      <div>
        <div className="label">Phone</div>
        <a href="tel:+919745431920">+91 9745431920</a>
      </div>
      <div>
        <div className="label">Location</div>
        <div>Varkala, Kerala, India</div>
      </div>
    </div>
  );
};

export default Info;
