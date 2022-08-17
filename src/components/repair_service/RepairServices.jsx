import react from "react";
import { useNavigate } from "react-router-dom";

export default function RepairServices() {

  const navigate = useNavigate();

  const onClick = () => {
    navigate("./iesssanitizer")
  }
  return (
    <div className="container">
      <div className="breadcrumbs">
        <ol className="breadcrumb">
          <li>
            <a>Home</a>
          </li>
          <li className="active">Repair Services</li>
        </ol>
      </div>
      <br />
      <h1 style={{ color: "#a8be40" }}>Repair Services</h1>

      <hr />

      <p>
        If you haven’t had your wheelchair, scooter, rollator or walker serviced
        in the previous six months, it’s may be time to do so. Ability Concepts
        is proud to introduce to you our IESS Sanitizer™ (Integrated Equipment
        Sanitisation System™) and the Ability Concepts 5-point Safety
        Inspection™ processes.
      </p>
      <br />
      <p>
        <strong>
          <a onClick={onClick}>IESS Sanitizer™ </a>{" "}
        </strong>
        IESS Sanitizer™ (Integrated Equipment Sanitisation System™) is a
        patented process that utilizes superheated water jet and steam to
        thoroughly degrease and clean your device. Ability Concepts is the only
        company in Toronto offering this service.
      </p>
      <br />

      <p>
        Ability Concepts 5-point Safety Inspection™ is a thorough checking of
        the 5 most commonly worn out parts on your device by our certified
        technicians. This is the best preventative maintenance to maintain your
        independence.
      </p>
      <br />

      <strong>
        <div style={{ color: "#a8be40" }}>
          <u>ABILITY CONCEPTS SERVICE PACKAGES</u>
        </div>
      </strong>

      <br />

      <table
        style={{
          color: "#000000",
          backgroundColor: "rgba(150, 212, 212, 0.4)",
        }}
      >
        <tr>
          <th></th>
          <th>Package A</th>
          <br />
          <th>Package B</th>
          <br />
          <th>Package C</th>
          <br />
        </tr>{" "}
        <br />
        <tr>
          <br />
          <td>
            • IESS Sanitizer™
            <br />• Ability 5-Point Inspection™ *
          </td>
          <br />
          <td>
            • IESS Sanitizer™ <br />
            • Ability 5-Point Inspection™ <br />
            • Adjusting of fasteners <br />
            • Brake & wheel check <br />
          </td>
          <br />
          <td>
            • IESS Sanitizer™
            <br /> • Ability 5-Point Inspection™ <br />• Adjusting of fasteners{" "}
            <br />• Brake & wheel check <br />• Removal of debris <br />•
            Greasing of all moving parts
          </td>
          <br />
        </tr>
        <br />
        <tr>
          <td>Client Drop-off at Ability</td>
          <td>$44.95</td>
          <br />
          <td>$44.95</td>
          <br />
          <td>$44.95</td>
          <br />
        </tr>
        <br />
        <tr>
          <td>
            Pick-up at Client Residence
            <br />
            (within GTA*, <br />
            loaner subject to availability)
          </td>
          <td>$44.95</td>
          <br />
          <td>$44.95</td>
          <br />
          <td>$44.95</td>
          <br />
        </tr>
      </table>

      <br />
      <div>
        <p>
          *Ability Concepts 5-point inspection: Walkers: brakes, wheels, hand
          grip, screws on walker, welding Wheelchair: brakes, wheels, welding,
          hand grip, seat Power wheelchair: brakes, wheels, welding, seat,
          electrical lighting, battery Scooter: brakes, wheels, welding, seat,
          electrical lighting, battery
        </p>
      </div>
    </div>
  );
}
