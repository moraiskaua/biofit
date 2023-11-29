interface GreatTitleProps {
  title: string;
}

const GreatTitle = ({ title }: GreatTitleProps) => {
  return (
    <h2 className="flex justify-center items-center uppercase bg-cover-title bg-cover h-[46px] w-[280px] text-white font-bold">
      {title}
    </h2>
  );
};

export default GreatTitle;
