import mark from "../assets/mark.svg";

const Table = () => {
  return (
    <div className="overflow-scroll lg:overflow-hidden m-auto w-full">
      <table>
        <tr className="rounded-tr-sm">
          <th className="bg-primary text-sm font-bold text-left px-8 py-4 text-white">
            Mobile App
          </th>
          <th className="bg-primary text-sm font-bold text-left px-8 py-4 text-white">
            Basic
          </th>
          <th className="bg-primary text-sm font-bold text-left px-8 py-4 text-white">
            Premium
          </th>
          <th className="bg-primary text-sm font-bold  text-left px-8 py-4 text-white">
            Enterprise
          </th>
        </tr>
        <tr className="">
          <td className="border border-ashOne px-8 py-4 text-sm">
            Manage employee sign in
          </td>
          <td class="border border-ashOne px-8 py-4 text-xs text-center">
            Up to 50 <br /> employees
          </td>
          <td class="border border-ashOne px-8 py-4 text-xs text-center">
            Up to 50 <br /> employees per location
          </td>
          <td class="border border-ashOne px-8 py-4 text-xs text-center">
            Unlimited <br /> employees
          </td>
        </tr>
        <tr>
          <td className="border border-ashOne px-8 py-4 text-sm">
            Create a health questionnaire
          </td>
          <td className="border border-ashOne px-8 py-4 text-sm">
            <img src={mark} alt="mark" className="m-auto block" />
          </td>
          <td className="border border-ashOne px-8 py-4 text-sm">
            <img src={mark} alt="mark" className="m-auto block" />
          </td>
          <td className="border border-ashOne px-8 py-4 text-sm">
            <img src={mark} alt="mark" className="m-auto block" />
          </td>
        </tr>
        <tr>
          <td className="border border-ashOne px-8 py-4 text-sm">
            Set rules to deny entry
          </td>
          <td className="border border-ashOne px-8 py-4 text-sm">
            <img src={mark} alt="mark" className="m-auto block" />
          </td>
          <td className="border border-ashOne px-8 py-4 text-sm">
            <img src={mark} alt="mark" className="m-auto block" />
          </td>
          <td className="border border-ashOne px-8 py-4 text-sm">
            <img src={mark} alt="mark" className="m-auto block" />
          </td>
        </tr>
        <tr>
          <td className="border border-ashOne px-8 py-4 text-sm">
            Share announcements and send push notifications
          </td>
          <td className="border border-ashOne px-8 py-4 text-sm"></td>
          <td className="border border-ashOne px-8 py-4 text-sm text-center">
            <img src={mark} alt="mark" className="m-auto block" />
          </td>
          <td className="border border-ashOne px-8 py-4 text-sm">
            <img src={mark} alt="mark" className="m-auto block" />
          </td>
        </tr>
        <tr>
          <td className="border border-ashOne px-8 py-4 text-sm">
            Create multiple, localized health questionnaires
          </td>
          <td className="border border-ashOne px-8 py-4 text-sm"></td>
          <td className="border border-ashOne px-8 py-4 text-sm">
            <img src={mark} alt="mark" className="m-auto block" />
          </td>
          <td className="border border-ashOne px-8 py-4 text-sm">
            <img src={mark} alt="mark" className="m-auto block" />
          </td>
        </tr>
        <tr>
          <td className="border border-ashOne px-8 py-4 text-sm">
            Enforce capacity limits
          </td>
          <td className="border border-ashOne px-8 py-4 text-sm"></td>
          <td className="border border-ashOne px-8 py-4 text-sm">
            <img src={mark} alt="mark" className="m-auto block" />
          </td>
          <td className="border border-ashOne px-8 py-4 text-sm">
            <img src={mark} alt="mark" className="m-auto block" />
          </td>
        </tr>
        <tr>
          <td className="border border-ashOne px-8 py-4 text-sm">
            Access control integrations
          </td>
          <td className="border border-ashOne px-8 py-4 text-sm"></td>
          <td className="border border-ashOne px-8 py-4 text-sm">
            <img src={mark} alt="mark" className="m-auto block" />
          </td>
          <td className="border border-ashOne px-8 py-4 text-sm">
            <img src={mark} alt="mark" className="m-auto block" />
          </td>
        </tr>
        <tr>
          <td className="border border-ashOne px-8 py-4 text-sm">
            Temperature check integrations
          </td>
          <td className="border border-ashOne px-8 py-4 text-sm"></td>
          <td className="border border-ashOne px-8 py-4 text-sm"></td>
          <td className="border border-ashOne px-8 py-4 text-sm text-center">
            <img src={mark} alt="mark" className="m-auto block" />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Table;
