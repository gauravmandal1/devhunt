export default ({ items }: { items: any[] }) => (
  <div className="flex flex-wrap items-center gap-x-3 pt-1 text-sm text-slate-400">
    {items.slice(0, 3).map((item, idx) => (
      <>
        <span>{item}</span>
        {idx !== items.length - 1 ? <span className="block w-1 h-1 bg-slate-500 rounded-full lasti"></span> : ''}
      </>
    ))}
  </div>
)
