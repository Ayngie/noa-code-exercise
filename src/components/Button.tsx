interface IButtonProps {
  symbol: string;
  text: string;
}
export const Button = ({ symbol, text }: IButtonProps) => {
  return (
    <div className="btn-container">
      <button>
        <span className="btn-symbol">{symbol}</span>
        <span className="btn-text">{text}</span>
      </button>
    </div>
  );
};
