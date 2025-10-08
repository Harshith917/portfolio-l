type PropTypes = {
  size: number;
};

export const VercelIcon = ({ size }: PropTypes) => {
  return (
    <svg
      width={size}
      height={size}
      className="text-text-secondary hover:text-text-primary"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M12 2L24 22H0L12 2z" />
    </svg>
  );
};
