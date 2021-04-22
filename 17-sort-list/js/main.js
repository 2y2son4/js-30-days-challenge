'use strict';

const series = [
  'Humans (2015-2018)',
  'Aeon Flux (1991-1995)',
  'Red Dwarf (1988-Present)',
  'Thunderbirds (1965-1966)',
  'The 100 (2014-Present)',
  'Now and Again (1999-2000)',
  'Max Headroom (1987-1988)',
  'Man in the High Castle (2015-2019)',
  'Misfits (2009-2013)',
  'The OA (2016-2019)',
  'The Six-Million Dollar Man (1974-1978)',
  'Futurama (1999-2013)',
  'Agents of S.H.I.E.L.D. (2013-Present)',
  'The Hitchhikers Guide to the Galaxy (1981)',
  'Stargate SG-1 (1997-2007)',
  'V (1983-1985)',
  'Jessica Jones (2015-2019)',
  'Life on Mars (2006-2007)',
  'The Flash (2014-Present)',
  'Space: 1999 (1975-1977)',
  'Quantum Leap (1989-1993)',
  'Babylon 5 (1994-1998)',
  'The Quatermass Experiment (1953)',
  'Dollhouse (2009-2010)',
  'Torchwood (2006-2011)',
  'Fringe (2008-2013)',
  'Wynonna Earp (2016-Present)',
  'Star Trek: The Next Generation (1987-1994)',
  'Lost (2004-2010)',
  'Astroboy (1963-1966)',
  'The Expanse (2015-Present)',
  'Utopia (2013-2014)',
  'Orphan Black (2013-2017)',
  'The Handmaids Tale (2017-Present)',
  'Devs (2020)',
  'The Outer Limits (1963-1965)',
  'Legion (2017-2019)',
  'Black Mirror (2011-Present)',
  'Buffy the Vampire Slayer (1997-2003)',
  'Stranger Things (2016-Present)',
  'Firefly (2002-2003)',
  'Watchmen (2019)',
  'Westworld (2016-Present)',
  'The X-Files (1993-2016)',
  'The Prisoner (1967-1968)',
  'The Mandalorian (2019-Present)',
  'Doctor Who (1963-Present)',
  'Battlestar Galactica (2004-2009)',
  'The Twilight Zone (1959-1964)',
  'Star Trek (1966-1969)',
];

const strip = (bandName) => {
  return bandName.replace(/^(a |the |an )/i, '').trim();
};

const sortedseries = series.sort((a, b) => (strip(a) > strip(b) ? 1 : -1));

document.querySelector('#series').innerHTML = sortedseries.map((band) => `<li>${band}</li>`).join('');
