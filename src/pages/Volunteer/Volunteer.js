import React from 'react';
import Layout from '../../components/Layout';
import { SectionTitle } from '../../styles';
import { VolunteerItem, VolunteerTitle } from './styles';

const Volunteer = ({ user }) => {
  return (
    <Layout user={user}>
      <div>
        <SectionTitle>Volunteer</SectionTitle>
        <ul>
          {user.volunteer.map((volunteer, i) => (
            <VolunteerItem key={i}>
              <VolunteerTitle>{volunteer.position}</VolunteerTitle>
              <p>{volunteer.organization}<span> &sdot; </span>{volunteer.location}
              <span> &sdot; </span><span>{volunteer.start.year}</span></p>
              <p>{volunteer.summary}</p>
            </VolunteerItem>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Volunteer;