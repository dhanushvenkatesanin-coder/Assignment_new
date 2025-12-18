function PremiumButton({ isPremiumUser }) {
  return (
    <div>
      {isPremiumUser && <button>Premium Feature</button>}
    </div>
  );
}