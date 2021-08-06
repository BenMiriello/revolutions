const createElement = require('./createElement');

const bibliographyPage = podcast =>
  <div>
    <h3>Bibliography</h3>
    <div className="page-text-container">
      <p style="text-align: right;">[Updated Feb 2020]</p>
      <p style="text-align: left;">Music</p>
      <p style="font-size: 100%; margin-top: 0;">Theme music is from Joseph Haydn's <em>Oxford Symphony (No. 92)</em> courtesy of <a href="https://www.musopen.org/" target="_blank" rel="noopener">musopen.org</a></p>
      <p style="text-align: left;">General</p>
      <ul>
        <li>Arendt, Hannah.<em> On Revolution</em>. England: Penguin Books, 1963.</li>
        <li>Breunig, Charles.&nbsp;<em>The Age of Revolution and Reaction, 1798-1848.</em> New York: W.W. Norton &amp; Company, 1977.</li>
        <li>Brinton, Crane. <em>The Anatomy of Revolution</em> (1939) 1965</li>
        <li>Foran, John, ed. <em>Theorizing Revolution</em>. New York: Routledge, 1997.</li>
        <li>Goldstone, Jack ed. <em>The Encyclopedia of Political Revolutions</em>. USA: Congressional Quarterly, 1998.</li>
        <li>Goldstone, Jack ed. <em>Revolutions: Theoretical, Comparative and Historical Studies</em>. Canada: Wadsworth, 2008.</li>
        <li>Goldstone, Jack.&nbsp;<em>Revolution and Rebellion in the Early Modern World.</em> Berkeley: University of California Press, 1991.</li>
        <li>Hobsbawn, Eric.&nbsp;<em>The Age of Revolution. </em>London: Weidenfeld and Nicolson, 1962.</li>
        <li>Malia, Martin. <em>History’s Locomotives.</em> New Haven: Yale University Press, 2006.</li>
        <li>Moore, Barrington. <em>Social Origins of Dictatorship and Democracy</em>. USA: Beacon Press, 1966.</li>
        <li>Parker, David, ed. <em>Revolutions and the Revolutionary Traditions in the West 1560-1991.</em> Routledge, 2000.</li>
        <li>Palmer, R.R. <em>The Age of Democratic Revolution</em>. Princeton: Princeton University Press, (1959, 1964) 2014.</li>
        <li>Skocpol, Theda. <em>States and Social Revolutions</em>. USA: Cambridge University Press, 1979.</li>
        <li>Tilly, Charles. <em>European Revolutions 1492-1992</em>. Great Britain: Blackwell, 1996.</li>
      </ul>
      <p style="text-align: left;">English</p>
      <ul>
        <li>Adamson, John. <em>The Noble Revolt: The Overthrow of Charles I.</em> London: Phoenix, 2007.</li>
        <li>Clarendon, Earl of. <em>History of the Rebellion: A New Selection.</em> New York: Oxford University Press, 2009.</li>
        <li>Gaunt, Peter ed. <em>The English Civil War Essential Readings</em>. Great Britain: Blackwell Publishers, 2000.</li>
        <li>Gardiner, S.R. <em>The Fall of the Monarchy of Charles I.</em> 2 Volumes. London: Longmans Green and Co, 1882.</li>
        <li>Gardiner, S.R. <em>The Great Civil War.</em> 4 Volumes. London: Longmans Green and Co, 1886.</li>
        <li>Hill, Christopher. <em>The Century of Revolution 1603-1714.</em> Great Britain: Sphere, 1962.</li>
        <li>Hill, Christopher. <em>The World Turned Upside Down.</em> England: Penguin Books, 1972.</li>
        <li>Kenyon, John. <em>The Civil Wars in England.</em> Great Britain: Phoenix, 1988.</li>
        <li>Kishlansky, Mark. <em>A Monarchy Transformed 1603-1714</em>. England: Penguin Books, 1997.</li>
        <li>Morrill, John ed. <em>Oliver Cromwell and the English Revolution.</em> 1990</li>
        <li>Morrill, John. <em>The Nature of the English Revolution.</em> New York: Longman, 1993.</li>
        <li>Reid, Stuart. <em>All the King’s Armies.</em> Great Britain: Spellmount, 1998.</li>
        <li>Russell, Conrad. <em>The Causes of the English Civil War.</em> Malta: Clarendon Press, 1990.</li>
        <li>Russell, Conrad. <em>The Fall of the British Monarchies.</em> New York: Clarendon Press, 1991.</li>
        <li>Stone, Lawrence.<em> The Causes of the English Revolution 1529-1642</em>. Great Britain: Routledge, 1972.</li>
        <li>Trevelyan, G.M. <em>The English Revolution 1688-1689.</em> New York: Oxford University Press, 1938.</li>
        <li>Underdown, David. <em>Revel, Riot and Rebellion.</em> Great Britain: Oxford University Press, 1985.</li>
        <li>Wedgewood, C.V. <em>The King's Peace</em>. 1955. Reprint, New York: Book of the Month Club, 1997.</li>
        <li>Wedgewood, C.V. <em>The King's War</em>. 1955. Reprint, New York: Book of the Month Club, 1997.</li>
        <li>Woolrych, Austin.<em> Britain in Revolution: 1625-1660.</em> New York: Oxford University Press, 2002.</li>
      </ul>
      <p>American</p>
      <ul>
        <li>Bailyn, Bernard. <em>The Ideological Origins of the American Revolution</em>. Enlarged ed. Cambridge: Belknap Press, 1992.&nbsp;</li>
        <li>Beard, Charles. <em>An Economic Interpretation of the Constitution of the United States</em>. 1913. Reprint, New York: The Free Press, 1986.</li>
        <li>Bobrick, Benson. <em>Angel in the Whirlwind: The Triumph of the American Revolution</em>. New York: Simon and Schuster, 1997.&nbsp;</li>
        <li>Boorstein, Daniel. <em>The Americans: The Colonial Experience</em>. New York: Vintage Books, 1964.</li>
        <li>Brands H.W. <em>The First American: The Life and Times of Benjamin Franklin</em>. New York: Anchor Books, &nbsp;2000.</li>
        <li>Chernow, Ron. <em>Washington: A Life. </em>United State: Penguin Books, 2010.</li>
        <li>Fischer, David Hackett. <em>Paul Revere’s Ride</em>. New York: Oxford University Press, 1995.</li>
        <li>Fiske, John. <em>The American Revolution</em>. 1891. Reprint, CreateSpace Independent Publishing, 2013.</li>
        <li>Hamilton, Alexander, James Madison, John Jay. <em>The Federalist Papers. </em>Edited by Garry Wills. New York: Bantam Books, 1982.</li>
        <li>Jenson, Merrill. <em>The Articles of Confederation.</em> United State: University of Wisconsin Press, 1940.</li>
        <li>Maier, Pauline. <em>American Scripture: Making the Declaration of Independence</em>. New York: Vintage Books,&nbsp; 1997.</li>
        <li>McCullough, David. <em>John Adams</em>. United States: Touchstone, 2001.</li>
        <li>McDonald, Forrest. <em>We the People: The Economic Origins of the Constitution</em>. Reprint. New Brunswick: Transaction Publishers, 1992.</li>
        <li>Middlekauff, Robert. <em>The Glorious Cause: The American Revolution, 1763-1789</em>. Rev. ed. New York: Oxford University Press, 2005.</li>
        <li>Morgan, Edmund. <em>American Slavery, American Freedom.&nbsp;</em>New York: W.W. Norton and Co. 1975.</li>
        <li>Morgan, Edmund. <em>The Birth of the Republic 1763-89</em>. 4<sup>th</sup> ed. Chicago: University of Chicago Press, 2013.</li>
        <li>Nash, Gary. <em>The Unknown American Revolution: The Unruly Birth of Democracy and the Struggle to Create America</em>. United States: Penguin Books, 2005.</li>
        <li>Paine, Thomas.&nbsp;<em>Common Sense, Rights of Man and Other Essentual Writings.&nbsp;</em>United States: Signet Classics, 2003.&nbsp;</li>
        <li>Savas, Theodore and J. David Dameron. <em>A Guide to the Battles of the American Revolution</em>. New York: Savis Beatie, 2010.</li>
        <li>Schlesinger Sr, Arthur M. <em>The Colonial Merchants and the American Revolution, 1763-1776</em>. 1918. Reprint, New York: Antheum, 1968.</li>
        <li>Wood, Gordon S. <em>The Radicalism of the American Revolution. </em>New York: Vintage Books, 1992.</li>
      </ul>
      <p>French</p>
      <ul>
        <li>Andress, David <em>Massacre at the Champ De Mars</em>. Royal Historical Press, 2000.</li>
        <li>Astin, Nigel <em>Religion and Revolution in France 1780-1804</em>. Washington DC: Catholic University of America Press, 2000.</li>
        <li>Blanning, T.C.W. <em>The Origins of the French Revolutionary Wars. </em>New York: Longman, 1986.</li>
        <li>Burke, Edmund. <em>Reflections on the Revolution in France.</em> New York: Oxford University Press, 2002.</li>
        <li>Cobban, Alfred<em> The Social Interpretation of the French Revolution</em>. Great Britain: Cambridge University Press, (1964) 1999.</li>
        <li>Cooper, Duff. <em>Talleyrand</em>. New York: Grove Press, (1932) 1997.</li>
        <li>Chartier, Roger <em>The Cultural Origins of the French Revolution</em>. Durham: Duke University Press, 1991.</li>
        <li>Crook, Malcolm <em>Napoleon Comes to Power: Democracy and Dictatorship in Revolutionary France</em> Cardiff: University of Wales Press, 1998.</li>
        <li>Doyle, William <em>The Oxford History of the French Revolution 2<sup>nd</sup>. Ed. </em>Oxford University Press, 2002.</li>
        <li>Egret, Jean <em>The French Pre-Revolution.</em> Chicago: University of Chicago Press, (1962) 1977.</li>
        <li>Esposito, Vincent and John Elting <em>A Military History and Atlas of the Napoleonic Wars.</em> Greenhill Books (1964) 1999</li>
        <li>Furet, Francois <em>Interpreting the French Revolution.</em> New York: Cambridge University Press, (1978) 1981.</li>
        <li>Gough, Hugh. <em>The Terror in the French Revolution 2<sup>nd</sup> Ed</em>. Palgrave Macmillion, (1998) 2014</li>
        <li>Hampson, Norman<em> Will and Circumstance: Montesquieu, Rousseau and the French Revolution</em>. Norman: University of Oklahoma Press, 1983.</li>
        <li>Hunt, Lynn. <em>The French Revolution and Human Rights: A Brief Documentary History</em>. New York: Bedford, 1996.</li>
        <li>Jones, Colin <em>The Longman Companion to the French Revolution</em> New York: Longman, 1990.</li>
        <li>Jones, P.M. <em>The Peasantry in the French Revolution</em> Great Britain: Cambridge University Press, 1988.</li>
        <li>Jordan, David P. <em>The King’s Trial: Louis XVI vs. The French Revolution 25<sup>th</sup> Ann. Ed.</em> Berkeley, University of California Press, (1979) 2004.</li>
        <li>Lawday, David <em>The Giant of the French Revolution: Danton A Life</em>. New York: Grove Press, 2009.</li>
        <li>Lefebvre, Georges <em>The Coming of the French Revolution.</em> Princeton: Princeton University Press, (1947) 2005.</li>
        <li>Lefebvre, Georges <em>The Thermidorians and the Directory</em>. Random House, 1964.</li>
        <li>Lyons, Martyn <em>France Under the Directory</em>. USA: Cambridge University Press, 1975.</li>
        <li>McMahon, Darrin M. <em>Enemies of Enlightenment: The French Counter-Revolution and the Making of Modernity. </em>USA: Oxford, 2001.</li>
        <li>McPhee, Peter. <em>Robespierre: A Revolutionary Life</em>. USA: Yale University Press, 2012.</li>
        <li>Palmer, R.R. <em>Twelve Who Ruled: A Year of Terror in the French Revolution</em>. Princeton: Princeton University Press, (1941) 1989.</li>
        <li>Ross, Stew <em>Where Did They Put The Guillotine Vol. 1</em> Yooper Press, 2014</li>
        <li>Ross, Stew <em>Where Did They Put The Guillotine Vol. 2 </em>Yooper Press, 2014.</li>
        <li>Schama, Simon <em>Citizens: A Chronicle of the French Revolution</em>. New York: Vintage Books, 1989.</li>
        <li>Scurr, Ruth <em>Fatal Purity: Robespierre and the French Revolution</em>. New York: Owl Books, 2006.</li>
        <li>Slavin, Morris. <em>The Making of an Insurrection: Parisian Sections and the Gironde</em>. Cambridge: Harvard University Press, 1986.</li>
        <li>Soboul, Albert <em>The Sans-Culottes</em> Princeton: Princeton University Press, (1968) 1980.</li>
        <li>Sydenham, M.J. <em>The Girondins</em>. Westport: Greenwood Press, 1961.</li>
        <li>Tackett, Timothy. <em>Becoming a Revoltionary: The Deputies of the French National Assembly and the Emergence of a Revolutionary Culture (1789-1790).</em> University Park: University of Pennsylvania Press, 1996</li>
        <li>Tocqueville, Alexis de <em>The Ancien Regime and the French Revolution</em>. New York: Anchor, 1955.</li>
      </ul>
      <p>Haitian</p>
      <ul>
        <li>Aristide, Jean-Bertrand ed.<em> Toussaint Louverture, The Haitian Revolution</em>. New York: Verso, 2008.</li>
        <li>Dubois, Laurent <em>Avengers of the New World: The Story of the Haitian Revolution</em>. Cambridge: Belknap Press, 2005.</li>
        <li>Dubois, Laurent <em>Haiti: The Aftershocks of History</em>. New York: Picador, 2012.</li>
        <li>Dubois, Laurnet and Garrigus John D. <em>Slave Revolution in the Caribbean, 1789-1804: A Brief History with Documents</em>. New York: Bedford, 2006.</li>
        <li>Fick, Carolyn E. <em>The Making of Haiti: The Saint-Domingue Revolution From Below</em>. Knoxville: The University of Kentucky Press, 1990.</li>
        <li>Ferrer, Ada, <em>Freedom’s Mirror: Cuba and Haiti in the Age of Revolution. </em>USA: Cambridge University Press, 2014.</li>
        <li>Garraway, Doris L. ed. <em>Tree of Liberty: Cultural Legacies of the Hatian Revolution in the Atlantic World</em>. Charlottesville: University of Virginia Press, 2008</li>
        <li>Garrigus, John D. <em>Before Haiti: Race and Citizenship in French Saint-Domingue</em> USA: Palgrave Macmillion, 2006.</li>
        <li>Geggus, David ed. <em>The Impact of the Haitian Revolution in the Atlantic World</em> USA: University of South Carolina Press, 2001.</li>
        <li>Geggus, David ed. <em>The Haitian Revolution: A Documentary History</em>. Indianapolis: Hackett Publishing, 2014.</li>
        <li>Geggus, David and Norman Fiering eds. <em>The World of the Haitian Revolution,</em> Bloomington: Indiana University Press, 2009.</li>
        <li>Girard, Philippe R. <em>The Slaves Who Defeated Napoleon: Toussaint Louverture and the Haitian War of Independence, 1801-1804.</em> Tuscaloosa: University of Alabama Press, 2011.</li>
        <li>Horne, Gerald <em>Confronting Black Jacobins: The United States, the Haitian Revolution, and the Origins of the Dominican Republic.</em> New York: Monthly Review Press, 2015.</li>
        <li>James, C.L.R. <em>The Black Jacobins: Toussaint L'Ouverture and the San Domingo Revolution</em> New York: Vintage Books, (1963) 1989.</li>
        <li>Popkin, Jeremy D. <em>You Are All Free: The Haitian Revolution and the Abolition of Slavery</em>. USA: University of Cambridge Press, 2010</li>
        <li>Popkin, Jeremy D. <em>A Concise History of the Haitian Revolution</em>. Wiley-Blackwell, 2012.</li>
        <li>Popkin, Jeremy D. ed. <em>Facing Racial Revolution: Eyewitness Accounts of the Haitian Revolution.</em> Chicago: University of Chicago Press, 2007.</li>
      </ul>
      <p>Spanish-American Independence</p>
      <ul>
        <li>Adelman, Jeremy. <em>Sovereignty and Revolution in Iberian America</em>. Princeton: Princeton University Press, 2006.</li>
        <li>Anna, Timothy E. <em>Spain &amp; The Loss of America.</em> Lincoln: University of Nebraska Press, 1983.</li>
        <li>Arana, Marie. <em>Bolívar. </em>New York: Simon &amp; Schuster, 2013.</li>
        <li>Archer, Christon I. ed. <em>The Wars of Independence in Spanish America.</em> Wilmington: Jaguar Books, 2000.</li>
        <li>Bethell, Leslie ed. <em>The Cambridge History of Latin America Vol. III: From Independence to c.1870</em>. New York: Cambridge University Press, 1985.</li>
        <li>Blanchard, Peter. <em>Under Flags of Freedom: Slave Soldiers &amp; the Wars of Independence in Spanish South America. </em>Pittsburgh: University of Pittsburgh Press, 2008.</li>
        <li>Brown, Matthew. <em>Adventuring Through Spanish Colonies: Simón Bolívar, Foreign Mercenaries and the Birth of New Nations. </em>Glasgow: Liverpool University Press, 2006.</li>
        <li>Bushnell, David. <em>The Making of Modern Colombia</em>. Berkeley: University of California Press, 1993.</li>
        <li>Bushnell, David, ed. Frederick H. Fornoff trans. <em>El Libertador: Writings of Simon Bolivar.</em> USA: Oxford University Press, 2003.</li>
        <li>Bushnell, David and Neill Macaulay. <em>The Emergence of Latin America in the Nineteenth Century 2<span style="font-size: 11.6667px;">nd</span>&nbsp;Ed. </em>New York: Oxford University Press, 1994.</li>
        <li>Costeloe, Michael P. <em>Response to Revolution: Imperial Spain and the Spanish American Revolutions, 1810-1840.</em> New York: Cambridge University Press, 1986.</li>
        <li>Chasteen, John Charles. <em>Americanos: Latin America’s Struggle for Independence.</em> USA: Oxford University Press, 2008.</li>
        <li>Harvey, Robert. <em>Liberators: Latin America’s Struggle for Independence.</em> New York: Overlook Press, 2000.</li>
        <li>Kinsbruner, Jay. <em>Independence in Spanish America: Revolutions, Civil Wars, and Underdevelopment 2<sup>nd</sup> ed.</em> Albuquerque: University of New Mexico Press, 2000.</li>
        <li>Lasso, Marixa. <em>Myths of Harmony: Race and Republicanism During the Age of Revolution, Colombia 1795-1831.</em> USA: University of Pittsburgh Press, 2007.</li>
        <li>Lynch, John, <em>Simón Bolívar A Life</em>. New Haven: Yale University Press, 2006.</li>
        <li>Lynch, John. <em>The Spanish American Revolutions, 1808-1826</em>. New York: WW Norton &amp; Co, 1973.</li>
        <li>Marquez, Gabriel Garcia. <em>The General in His Labyrinth. </em>New York: Vintage International, 1990.</li>
        <li>Murray, Pamela S. <em>For Glory and Bolívar: The Remarkable Life of Manuela Sáenz</em>. Austin: University of Texas Press, 2008.</li>
        <li>Racine, Karen. <em>Francisco de Miranda: A Transatlantic Life in the Age of Revolution. </em>Wilmington: SR Books, 2003.</li>
        <li>Rodruguez, Jaime E. <em>The Independence of Spanish America</em>. USA: Cambridge University Press, 1998</li>
        <li>Salcedo-Bastardo, J.L. <em>Bolivar: A Continent and Its Destiny.</em> Surrey: Richmond Publishing, 1977</li>
        <li>Tarver, H. Michael and Julia C. Frederick. <em>The History of Venezuela. </em>USA: Palgrave MacMillan, 2006</li>
        <li>Whitacker, Arthur P. <em>The United States and the Independence of Latin America, 1800-1830 2<span style="font-size: 11.6667px;">nd</span>&nbsp;Ed</em>. New York: WW Norton &amp; Co, 1964</li>
      </ul>
      <p>The July Revolution</p>
      <ul>
        <li>Beik, Paul H. <em>Louis Philippe and the July Monarchy.</em> New York: Van Nostrand, 1965</li>
        <li>Cooper, Duff. <em>Talleyrand</em>. New York: Grove Press, (1932) 1997.</li>
        <li>Jardin, Andre and Andre-Jean Tudesq. <em>Restoration &amp; Reaction 1815-1848</em>. New York: Cambridge University Press, 1988.</li>
        <li>Mansel, Philip. <em>Paris Between Empires Monarchy and Revolution 1814-1852</em>. New York: St Martin’s Press, 2001.</li>
        <li>Matthews, Andrew. <em>Revolution and Reaction: Europe 1789-1849</em>. New York: Cambridge University Press, 2000.</li>
        <li>Pinckney, David. <em>The French Revolution of 1830</em>. New Jersey: Princeton University Press, 1971.</li>
        <li>Price, Munro. <em>The Perilous Crown: France Between Revolutions</em>. UK: Pan Books, 2007.</li>
        <li>Schama, Simon.&nbsp;<em>Citizens: A Chronicle of the French Revolution</em>. New York: Vintage Books, 1989.</li>
        <li>Traugott, Mark.&nbsp;<em>The Insurgent Barricade. </em>Berkeley: University of California Press, 2010.</li>
      </ul>
      <p>1848</p>
      <ul>
        <li>Beik, Paul H. <em>Louis Philippe and the July Monarchy.</em> New York: Van Nostrand, 1965.</li>
        <li>Deak, Istvan. <em>The Lawful Revolution: Louis Kossuth and the Hungarians 1848-1849</em>. New York: Columbia University Press, 1979.</li>
        <li>Deme, Laszlo. <em>The Radical Left in Hungarian Revolution of 1848. </em>New York: Columbia University Press,&nbsp;1976.</li>
        <li>Denholm. Anthony. <em>France in Revolution 1848</em>. New York: John Wiley &amp; Sons, 1972.</li>
        <li>Evans, R.J.W., and Hartmut Pogge von Strandmann, eds. <em>The Revolutions in Europe, 1848–1849: From Reform to Reaction</em>. Oxford: Oxford University Press, 2000.</li>
        <li>Eyck, Frank ed. <em>The Revolutions of 1848-49.</em> Edinburgh: Oliver &amp; Boyd, 1972.</li>
        <li>Fasel, George. <em>Europe in Upheaval: The Revolutions of 1848</em>. Chicago: Rand McNally Company, 1970.</li>
        <li>Fortescue, William. <em>France and 1848: The End of Monarchy.</em> New York: Rutledge, 2005.</li>
        <li>Hayles, E.E.Y. <em>Mazzini and the Secret Societies. </em>London: Eyre &amp; Spottiswoode, 1956.</li>
        <li>Herzen, Alexander. <em>From The Other Shore</em>. New York: George Braziller, Inc, (1848-1850) 1956.</li>
        <li>Jardin, Andre and Andre-Jean Tudesq. <em>Restoration &amp; Reaction 1815-1848</em>. New York: Cambridge University Press, 1988.</li>
        <li>Körner, Axel ed. <em>1848: A European Revolution?</em> USA: St. Martin’s Press, 2000.</li>
        <li>Kosary, Domokos. <em>The Press During the Hungarian Revolution of 1848-1849. </em>Boulder: Social Science Monographs, 1986.</li>
        <li>Mansel, Philip. <em>Paris Between Empires Monarchy and Revolution 1814-1852</em>. New York: St Martin’s Press, 2001.</li>
        <li>Marx, Karl and Frederick Engels. <em>The Revolution of 1848-49: Articles from the Neue Rhenische Zeitung.</em> New York: International Publishers, 1972.</li>
        <li>Marx, Karl. <em>Political Writings Vol. 1: The Revolutions of 1848.</em> Ed. David Fernbach. New York: Verso, 2010.</li>
        <li>Marx, Karl. <em>Political Writings Vol. 2: Surveys From Exile.</em> Ed. David Fernbach. New York: Verso, 2010.</li>
        <li>Matthews, Andrew. <em>Revolution and Reaction: Europe 1789-1849</em>. New York: Cambridge University Press, 2000.</li>
        <li>Maurice, C. Edmund. <em>The Revolutionary Movements of 1848 in Italy, Austria-Hungary, and Germany. </em>New York: Haskell House Publishers, 1969.</li>
        <li>Molnar, Miklos <em>A Concise History of Hungary</em>. Cambridge: Cambridge University Press, 1996.</li>
        <li>Namier, Lewis. <em>1848: The Revolution of the Intellectuals.</em> London: Oxford University Press, 1944.</li>
        <li>Pech, Stanley Z. <em>The Czech Revolution of 1848</em>. Chapel Hill: The University of North Carolina Press, 1969.</li>
        <li>Price, Munro. <em>The Perilous Crown: France Between Revolutions</em>. UK: Pan Books, 2007.</li>
        <li>Price, Roger. <em>1848 in France</em>. London: Thames &amp; Hudson, 1975.</li>
        <li>Price, Roger ed. <em>Documents on the French Revolution of 1848</em>. New York: St. Martin’s Press, 1996.</li>
        <li>Rappaport, Mike. <em>1848: Year of Revolution</em>. New York: Basic Books, 2008.</li>
        <li>Rath, R. John. <em>The Viennese Revolution of 1848</em>. Austin: University of Texas Press, 1957.</li>
        <li>Robertson, Priscilla. <em>Revolutions of 1848: A Social History. </em>Princeton: Princeton University Press, 1967.</li>
        <li>Sked, Alan. <em>The Decline and Fall of the Habsburg&nbsp;Empire 1815-1918, 2nd Ed.</em> Malaysia: Longman, 2001.</li>
        <li>Smith, Denis Mack ed. <em>The Making of Italy 1796-1870.</em> New York: Walker and Company, 1968.</li>
        <li>Stearns, Peter N. <em>1848: The Revolutionary Tide in Europe,</em> New York: W.W. Norton &amp; Company, 1972.</li>
        <li>Stroup, Edsel Walter. <em>Hungary in Early 1848. </em>Buffalo: Hungarian Cultural Foundation, 1977.</li>
        <li>Traugott, Mark <em>The Insurgent Barricade. </em>Berkeley: University of California Press, 2010.</li>
        <li>Valentin, Veit. <em>1848: Chapters in German History. </em>Hampden: Archon, 1965.</li>
        <li>Wilson, Peter H. <em>1848: The Year of Revolutions. </em>The International Library of Essays on Political History Cornwall: Ashgate, 2006.</li>
      </ul>
      <p>The Paris Commune</p>
      <ul>
        <li>Abidor, Mitchell ed. <em>Voices of the Paris Commune. USA</em>: PM Press, 2015.</li>
        <li>Gluckstein, Donny. <em>The Paris Commune: A Revolution in Democracy</em>. Canada: Haymarket Books, 2006.</li>
        <li>Horne, Alistair. <em>The Fall of Paris: The Siege and the Commune 1870-71</em>. England: Penguin Books, 2007.</li>
        <li>Lissagaray, Prosper Olivier. <em>History of the Paris Commune of 1871</em>. Red and Black Publishers, 2007.</li>
        <li>Marx, Karl. <em>Surveys from Exile: Political Writings.</em> (Ed. David Fernbach). Verso, 2010.</li>
        <li>Marx, Karl. <em>The Civil War in France: The Paris Commune</em>. 2nd edition. Intl. Pub, 1989.</li>
        <li>Merman, John.<em> Massacre: The Life and Death of the Paris Commune.</em> USA: Basic Books, 2014.</li>
        <li>Michel, Louise. <em>Red Virgin: Memoirs Of Louise Michel. </em>The University of Alabama Press, 1981.&nbsp;</li>
        <li>Reclus, Elie. <em>La Commune de Paris au jour le jour, 1871.</em> gallica.bnf.fr, 1908.</li>
        <li>Valles, Jules. <em>The Insurrectionist. </em>Prentice-Hall, 1971</li>
        <li>Various. <em>Documents of the Paris Commune. </em>marxists.org</li>
        <li>Various. <em>The Paris Commune Archives. </em>dwardmac.pitzer.ed.</li>
        <li>Zonneveld, Andrew. Ed. <em>The Commune: Paris, 1871. </em> On Our Own Authority! Publishing, 2013.&nbsp;</li>
      </ul>
      <p>Mexican</p>
      <ul>
        <li>Benjamin, Thomas. <em>La Revolución</em>. Austin: University of Texas Press, 2000.</li>
        <li>Berumen, Miguel Ángel. <em>Pancho Villa: la construction del mito. </em>Cuadro x Cuadro, 2005.</li>
        <li>Buchenau, Jürgen. <em>The Last Caudillo: Alvaro Obregón and the Mexican Revolution</em>. Wiley-Blackwell, 2011.</li>
        <li>Casasola, Gustavo. <em>Historia Gráfica de la Revolución Mexicana 1900-1960</em>. 5 Volumes. Editorial Trillas, 1970.</li>
        <li>Cockcroft, James D. <em> Intellectual Precursors of the Mexican Revolution. </em>Austin: University of Texas Press, 1968<em>.</em></li>
        <li>Cumberland, Charles. <em>Mexican Revolution: Genesis Under Madero</em>. Austin: University of Texas Press, 1952.</li>
        <li>Garner, Paul. <em>Porfirio Diaz</em>. Great Britain: Longman, 2001.</li>
        <li>Gilly, Adolfo. <em>The Mexican Revolution</em>. The New Press, 2006 (1971).</li>
        <li>Hamnett, Brian. <em>Juárez</em>. Great Britain: Longman, 1994.</li>
        <li>Hart, John Mason. <em>Revolutionary Mexico: The Coming and Process of the Mexican Revolution</em>. Berkeley: University of California Press, 1997.</li>
        <li>Hart, Paul. <em>Bitter Harvest: The Social Transformation of Morelos Mexico and the Origins of the Zapatista Revolution, 1840-1910</em>. University of New Mexico Press, 2006.</li>
        <li>Hodges, Donald C. And Ross Gandy. <em>Mexico: The End of the Revolution</em>. USA: Praeger, 2002.</li>
        <li>Joseph, Gilbert M. And Timothy J. Henderson Eds. <em>The Mexico Reader: History, Culture, Politics</em>. Durham: Duke University Press, 2002.</li>
        <li>Katz, Friedrich. <em>The Life and Times of Pancho Villa</em>. Stanford University Press, 1998.</li>
        <li>Katz, Friedrich. <em>The Secret War in Mexico. </em>University of Chicago Press, 1981.</li>
        <li>Knight, Alan. <em>The Mexican Revolution Vol. 1: Porfirians, Liberals, and Peasants</em>. Cambridge University Press, 1986.</li>
        <li>Knight, Alan. <em>The Mexican Revolution Vol. 2: Counter-revolution and Reconstruction</em>. Cambridge University Press, 1986.</li>
        <li>Mraz, John. <em>Photographing the Mexican Revolution</em>. Austin: University of Texas Press, 2012.</li>
        <li>Niemeyer, Victor E. <em>Revolution at Querétaro: The Mexican Constitutional Convention of 1916–1917</em>. Austin: University of Texas Press, 1974.</li>
        <li>Reed, John.<em> Insurgent Mexico</em>. archive.org, 1914.</li>
        <li>Russell, Philip L. <em>The History of Mexico</em> <em>From Pre-Conquest to Present. </em>New York: Routledge, 2010.</li>
        <li>Tennenbaum, Frank. <em>The Mexican Agrarian Revolution</em>. New York: The Macmillan Company, 1930.</li>
        <li>Tennenbaum, Frank. <em>Mexico: The Struggle for Peace and Bread</em>. New York: Alfred A Knopf, 1950.</li>
        <li>Womack Jr, John. <em>Zapata and the Mexican Revolution</em>. USA: Vintage Books, 1968.</li>
      </ul>
      <p>Russian [Updated Continuously]</p>
      <ul>
        <li>Abraham, Richard. <em><span class="breaker-breaker">Alexander Kerensky : The First Love of the</span></em><span class="breaker-breaker"> Revolution. New York: Columbia University Press, 1987.</span></li>
        <li>Ascher, Abraham. <em>Pavel Axelrod and the Development of Menshevism</em>. Harvard University Press, 1972.</li>
        <li>Ascher, Abraham. <em>The Revolution of 1905: A Short History</em>. Stanford University Press, 2004.</li>
        <li>Bakunin, Mikhail [available at <a href="https://theanarchistlibrary.org/category/author/mikhail-bakunin">theanarchistlibrary.org</a>]
          <ul>
            <li>“Revolutionary Catechism,” 1866.&nbsp;</li>
            <li>“National Catechism, 1866.</li>
            <li>“On the Founding of the Worker's International,” Undated.</li>
            <li>“The Organization of the International,” 1869.</li>
            <li>“Letter to a Frenchman on the Present Crisis,” 1870.</li>
            <li><em>God and the State</em>, 1871.</li>
            <li>“On the Question of the Right of Inheritance,” 1871.</li>
            <li>“Memories of Marx and Engels,” 1869-71.</li>
            <li><em>Marxism, Freedom, and the State</em>, 1870-72.</li>
            <li>“On The International and Karl Marx,” 1872.</li>
            <li><em>Statism and Anarchy</em>, 1873.</li>
            <li>“Stateless Socialism: Anarchism,” Undated.</li>
          </ul>
        </li>
        <li>Basil, John D. <em>Mensheviks in the Revolution of 1917</em>. Slavica Publishers, 1984.</li>
        <li>Berkman, Alexander.<em> The Bolshevik Myth: An Anarchist’s Eyewitness Account of the Betrayal and Failure of the Russian Communist Revolution</em>. Red and Black Publishers, 2014.</li>
        <li>Bushkovitch, Paul. <em>A Concise History of Russia</em>. Cambridge University Press, 2011.</li>
        <li>Butler, Nancy. “Vol'noe Slovo and the Zemstvo Union: Was Russian Liberalism Dead in 1881?” <em>Canadian Slavonic Papers / Revue Canadienne des Slavistes</em>, Vol. 16, No. 1 (Spring/Printemps, 1974), pp. 14-38.</li>
        <li>Çiçek, Anıl. “The First Russian Revolution: The Decembrist Movement And Its Impact On Russian Political History,” <em>International Journal of Russian Studies. </em>No. 6. (2017/2)<em>.</em></li>
        <li>Christman, Henry M. Ed.<em> Essential Works of Lenin: "What Is to Be Done?" and Other Writings</em>. Dover Publications, 2012.</li>
        <li>Ciff, Tony. "From Marxist Circle to Agitation" <em>International Socialism,</em>&nbsp;No.52, July-September 1972, pp.16-22.</li>
        <li>Conroy, Mary Shaeffer. <em><span class="breaker-breaker">Peter Arkadʹevich Stolypin: Practical Politics in Late Tsarist Russia</span></em><span class="breaker-breaker">. Boulder: Westview Press, 1976.</span></li>
        <li>Cutler, Robert M. Ed.<em> The Basic Bakunin: Writings, 1869-71</em>. Prometheus Books, 1992.</li>
        <li>Daly, Jonathan and Leonid Trofimov (Translators). <em>Russia in War and Revolution, 1914-1922: A Documentary History. </em>USA: Hackett Publishing Company, 2009.</li>
        <li>Deutscher, Isaac. <em>The Prophet: A Life of Leon Trotsky</em>. Verso, 2015.</li>
        <li>Elkin, B. I. “Paul Milyukov (1859-1943),” <em>The Slavonic and East European Review,</em> Vol. 23, No. 62 (Jan., 1945), pp. 137-141</li>
        <li>Fallows, Thomas S. “The Russian Fronde and the Zemstvo Movement: Economic Agitation and Gentry Politics in the Mid-1890’s,” The Russian Review, Vol. 44, No. 2 (Apr., 1985), pp. 119-138.</li>
        <li>Figes, Orlando. <em>A People's Tragedy: The Russian Revolution 1891-1924</em>. Penguin Books, 1996.</li>
        <li>Field, Daniel. “Kavelin and Russian Liberalism,” <em>Slavic Review</em>, Vol. 32, No. 1 (Mar., 1973), pp. 59-78</li>
        <li>Fitzpatrick, Sheila. <em>The Russian Revolution</em>. 4th Ed. Oxford University Press, 2017</li>
        <li>Gali, S. "The Impact of War on the Russian Liberals in 1904–5." <em>Government and Opposition</em>, Vol. 1, No. 1 (Nov. 1965), pp. 85-109</li>
        <li>Getzler, Israel. <em>Martov: A Political Biography of a Russian Social Democrat. </em>Cambridge University Press, 1967.&nbsp;</li>
        <li>Goldenweiser, Alexis. “Paul Miliukov - Historian and Statesman,” <em>The Russian Review</em>, Vol. 16, No. 2 (Apr., 1957), pp. 3-14.</li>
        <li>Harcave, Sidney. <em>First blood : The Russian Revolution of 1905. </em>New York: Macmillan, 1964.</li>
        <li>Hildermeier, Manfred. <em>The Russian Socialist Revolutionary Party Before the First World War</em>. Palgrave Macmillan, 2000.</li>
        <li>Kautsky, Karl [available at <a href="https://www.marxists.org/archive/kautsky/index.htm">marxist.org</a>]
          <ul>
            <li>"The Erfurt Program" 1881.</li>
            <li><em>The Class Struggle, </em>1886.&nbsp;</li>
          </ul>
        </li>
        <li>Kelly, Aileen. “What Is Real Is Rational: The Political Philosophy of B. N. Chicherin,” <em>Cahiers du Monde russe et soviétique</em>, Vol. 18, No. 3 (Jul. - Sep., 1977), pp. 195-222.</li>
        <li>Kotkin, Stephen<em>. Stalin, Vol. I: Paradoxes of Power, 1878-1928</em>. Penguin Books, 2014.</li>
        <li>Lenin, V.I. [available at <a href="https://www.marxists.org/archive/lenin/">marxist.org]</a><br/>
          <ul>
            <li><em>What the “Friends of the People” Are and How They Fight the Social-Democrats</em>, 1894</li>
            <li>"To the Working Men and Women of the Thornton Factory" 1895.</li>
            <li>"Explanation of the Law on Fines Imposed on Factory Workers" 1895.</li>
            <li><em>What Is To Be Done?</em> 1902.</li>
            <li>“The Three Sources and Three Component Parts of Marxism”, 1913.</li>
            <li><em>Karl Marx: A Brief Biographical Sketch With an Exposition of Marxism</em>, 1914.</li>
          </ul>
        </li>
        <li>Lih, Lars. <em>Lenin. </em>Reaktion Books, 2012.</li>
        <li>Malloy Jr., James A. “N.A. Miliutin and the Zemstvo Reform of 1864,” <em>Études Slaves et Est-Européennes / Slavic and East-European Studies</em>, Vol. 14 (1969), pp. 83-102.</li>
        <li>Malone, Richard.<em> Analysing the Russian Revolution.</em> USA: Cambridge University Press, 2004.</li>
        <li>Manchester, Laurie. “Contradictions at the Heart of Russian Liberalism" Pavel Miliukov's Views of Peter the Great and the Role of Personality in History as an Academic, a Politician, and an Émigré,” <em>Russian History</em>, Vol. 37, No. 2 (2010), pp. 102-132.</li>
        <li>Marx, Karl and Friedrich Engels [available at <a href="https://www.marxists.org/archive/marx/">marxist.org</a>]
      <ul>
        <li><em>On The Jewish Question</em>, 1844.</li>
        <li><em>The German Ideology</em>, 1845.</li>
        <li>“The Principles of Communism,” 1847.</li>
        <li>“The Communist Manifesto,” 1848.</li>
        <li>Articles in <em>Neue Rheinische Zeitung</em>, 1849.</li>
        <li><em>The Class Struggle in France</em>, 1850.</li>
        <li><em>The Eighteenth Brumaire of Louis Bonaparte</em>, 1852.</li>
        <li><em>Contribution to Critique of Political Economy</em>, 1859.</li>
        <li>“The Inaugural Address of the International,” 1864.</li>
        <li>“General Rules and Administrative Regulations of the International,” 1864.</li>
        <li>“Marginal Notes on Bakunin's Program,” 1868.</li>
        <li><em>The Civil War in France</em>, 1871.</li>
        <li>“Fictitious Splits in the International,” 1872.</li>
        <li>“The Bakuninists at Work,” 1873.</li>
        <li><em>Critique of the Gotha Program</em>, 1875.</li>
        <li>“Letter to Vera Zasulich,” 1881.</li>
        <li><em>Socialism: Utopian and Scientific</em>, 1880.</li>
      </ul>
      </li>
        <li>Massie, Robert K. <em>Nicholas and Alexandra</em>. Random House, 1967.</li>
        <li>Massie, Robert K. <em>Peter the Great: His Life and World. </em>Random House, 1980.</li>
        <li>Massie, Robert K. <em>Catherine the Great: Portrait of a Woman.</em> Random House, 2011.</li>
        <li>Mawdsley, Evan. <em>The Russian Civil War.</em> Pegasus Book, 2009.</li>
        <li>McNeal, Robert H. <em>Bride Of The Revolution: Krupskaya and Lenin.&nbsp;</em>University of Michigan Press, 1972.</li>
        <li>Miller, Martin A. Ed. <em>The Russian Revolution: The Essential Readings</em>. Great Britain: Wiley-Blackwell, 2001.</li>
        <li>Montefiore, Simon Sebag. <em>Young Stalin. </em>New York: Vintage Books, 2007.</li>
        <li>Perrie, Maureen. <em>The Agrarian Policy of the Russian Socialist-Revolutionary Party</em>. USA: Cambridge University Press, 2011.</li>
        <li>Pipes, Richard. <em>Russia Under the Bolshevik Regime</em>. 4<span class="s1"><sup>th</sup></span> Ed. Vintage, 1995.</li>
        <li>Pipes, Richard. <em>Struve: Liberal on the Left, 1870-1905. </em>Harvard University Press, 1970.</li>
        <li>Pipes, Richard. <em>The Russian Revolution</em>. Vintage, 1991.</li>
        <li>Plekhanov, Grigory [available at <a href="https://www.marxists.org/archive/plekhanov/index.htm">marxist.org</a>]
      <ul>
        <li><em>Socialism and the Political Struggle</em>, 1883</li>
        <li>"Programme of Social-Democratic Emancipation of Labour Group," 1884.</li>
        <li><em>Our Differences</em>, 1885.</li>
        <li><em>The Development of the Monist View of History</em>, 1895.</li>
        <li><em>Anarchism and Socialism</em>, 1895.</li>
      </ul>
      </li>
        <li>Reed, John. <em>Ten Days That Shook the World</em>. Penguin, 2007.</li>
        <li>Rodichev, F. and J. E. S. C. “The Liberal Movement in Russia (1855-1891),” <em>The Slavonic Review,</em> Vol. 2, No. 4 (Jun., 1923), pp. 1-13.</li>
        <li>Robertson, Ann. “The Philosophical Roots of the Marx-Bakunin Conflict,” <em>What's Next</em>, December 2003.</li>
        <li>Ruthchild, Rochelle Goldberg.<em> Equality and Revolution: Women’s Rights in the Russian Empire, 1905–1917</em>. USA: University of Pittsburgh Press, 2010.</li>
        <li>Sablinsky, Walter. <em>The Road to Bloody Sunday : Father Gapon and the St. Petersburg Massacre of 1905. </em>Princeton: Princeton University Press, 1976.&nbsp;</li>
        <li>Sebestyen, Victor.&nbsp;<em>Lenin. </em>Pantheon Books, 2017.</li>
        <li>Serge, Victor. <em>Year One of the Russian Revolution</em>. Haymarket Books, 2017.</li>
        <li>Shukman, Harold. <em>The Blackwell Encyclopedia of the Russian Revolution</em>. Great Britain: Wiley-Blackwell, 1994.</li>
        <li>Smele, Jonathan. <em>The 'Russian' Civil Wars, 1916-1926: Ten Years That Shook the World</em>. Oxford University Press, 2016.</li>
        <li>Smith, S. A.<em> Russia in Revolution: An Empire in Crisis, 1890 to 1928. </em>Oxford University Press, 2017.</li>
        <li>Sperber, Jonathan. <em>Karl Marx: A Nineteenth-Century Life.</em> Liveright, 2013.</li>
        <li>Stockdale, Melissa Kirschke. <em><span class="breaker-breaker">Paul Miliukov and the Quest for a Liberal Russia,</span></em><span class="breaker-breaker"><em> 1880-1918</em>. Ithaca: Cornell University Press, 1996. </span></li>
        <li>Steinberg, Mark D. Ed.<em> Voices of Revolution, 1917. </em>USA: Yale University Press, 2001.</li>
        <li>Surh, Gerald D. <em>1905 in St. Petersburg: Labor, Society, and Revolution.&nbsp;</em>Stanford University Press, 1989.</li>
        <li>Treadgold, Donald W. “The Constitutional Democrats and the Russian Liberal Tradition,” <em>The American Slavic and East European Review</em>, Vol. 10, No. 2 (Apr., 1951), pp. 85-94.</li>
        <li>Trotsky, Leon [available at <a href="https://www.marxists.org/archive/trotsky/index.htm">marxists.org</a>]
      <ul>
        <li><em>My Life</em>, 1930.</li>
        <li><em>The Revolution Betrayed, </em>1934.</li>
        <li><em>History of the Russian Revolution, </em>1932.</li>
      </ul>
      </li>
        <li>Waldron, Peter. <em>Between Two Revolutions: Stolypin and the Politics of Renewal in Russia</em>. Dekalb: Northern Illinois University Press, 1998.</li>
        <li>Wood, Alan. <em>The Origins of the Russian Revolution</em>. 2<span class="s1"><sup>nd</sup></span> Ed. Routledge, 2002.</li>
        <li>Wood, Alan. “What is Historical Materialism?” link: <a href="https://www.marxist.com/an-introduction-to-historical-materialism.htm">marxist.com</a>, Jan 2016.</li>
      </ul>
    </div>
  </div>;

module.exports = bibliographyPage;
