const Staff = ({ staff }) => {
  return (
    <section className="vn-staff">
      {staff.map((role) => (
        <div key={role.role}>
          <h3>{role.role}</h3>
          {role.rows.map((member) => (
            <p key={member.id}>
              {member.name} | {`${member.note}`}
            </p>
          ))}
        </div>
      ))}
    </section>
  )
}

export default Staff
