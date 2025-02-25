/** @type {import('tailwindcss').Config} */
 

export default {
  content: ['./index.html', './src/**/**.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
         
        'Aclonica-Regular': ['Aclonica-Regular', 'sans-serif'],
        'ArchivoBlack-Regular': ['ArchivoBlack-Regular', 'sans-serif'],
        'Blackbeard-ld7V' : ['Blackbeard-ld7V', 'cursive'],
        'BlackOpsOne-Regular': ['BlackOpsOne-Regular', 'cursive'],
        'Borel-Regular': ['Borel-Regular', 'sans-serif'],
        'Caprasimo-Regular': ['Caprasimo-Regular', 'cursive'],
        'Caprasimo': ['Caprasimo', 'cursive'],
        'Changa-Regular': ['Changa-Regular', 'sans-serif'],
        'Changa-VariableFont_wght': ['Changa-VariableFont_wght', 'sans-serif'],
        'ChunkFive-Regular': ['ChunkFive-Regular', 'sans-serif'],
        'Creepster-Regular': ['Creepster-Regular', 'cursive'],
        'DMSerifDisplay-Italic': ['DMSerifDisplay-Italic', 'serif'],
        'DMSerifDisplay-Regular': ['DMSerifDisplay-Regular', 'serif'],
        'DMSerifDisplay': ['DM Serif Display-italic', 'serif'],
        'EmilysCandy-Regular': ['EmilysCandy-Regular', 'cursive'],
        'HoltwoodOneSC-Regular': ['HoltwoodOneSC-Regular', 'sans-serif'],
        'HoltwoodOneSC': ['Holtwood One SC', 'sans-serif'],
        'Iceberg-Regular': ['Iceberg-Regular', 'cursive'],
        'Itim-Regular': ['Itim-Regular, cursive'],
        'Kingthings_Petrock': ['Kingthings_Petrock', 'cursive'],
        'Kranky-Regular': ['Kranky-Regular', 'cursive'],
        'LibreBaskerville-Bold': ['LibreBaskerville-Bold', 'serif'],
        'LibreBaskerville-Italic': ['LibreBaskerville-Italic', 'serif'],
        'LibreBaskerville-Regular': ['LibreBaskerville-Regular', 'serif'],
        'MedievalSharp-Regular': ['MedievalSharp-Regular', 'cursive'],
        'MetalMania-Regular': ['MetalMania-Regular', 'cursive'],
        'Metamorphous-Regular': ['Metamorphous-Regular', 'cursive'],
         'Nosifer-Regular': ['Nosifer-Regular', 'cursive'],
         'NotoSans-Italic-VariableFont_wdth,wght': ['NotoSans-Italic-VariableFont_wdth,wght', 'sans-serif'],
         'NotoSans-VariableFont_wdth,wght': ['NotoSans-VariableFont_wdth,wght', 'sans-serif'],
         'NovaCut-Regular': ['NovaCut-Regular', 'sans-serif'],
         'Orbitron-Regular': ['Orbitron-Regular', 'sans-serif'],
         'Orbitron-VariableFont_wght': ['Orbitron-VariableFont_wght', 'sans-serif'],
         'PermanentMarker-Regular': ['PermanentMarker-Regular', 'cursive'],
         'PTSerif-Bold': ['PTSerif-Bold', 'serif'],
         'PTSerif-BoldItalic': ['PTSerif-BoldItalic', 'serif'],
         'PTSerif-Italic': ['PTSerif-Italic', 'serif'],
         'PTSerif-Regular': ['PTSerif-Regular', 'serif'],
         'Rye-Regular': ['Rye-Regular', 'cursive'],
         'Sansita-Italic': ['Sansita-Italic', 'sans-serif'],
         'Sansita-Regular': ['Sansita-Regular', 'sans-serif'],
          'Sixtyfour-Regular-VariableFont': ['Sixtyfour-Regular-VariableFont', 'cursive'],
          'Sixtyfour-Regular': ['Sixtyfour-Regular', 'cursive'],
          'Yellowtail-Regular': ['Yellowtail-Regular', 'cursive'],
      },
      colors: {
        cinder: {
          light: '#f6f6f9',
          DEFAULT: '#898ca7',
          dark: '#18181f',
        },
        mint: {
          50: '#eeffef',
          100: '#d8ffdd',
          200: '#a4ffaf',
          300: '#78fd8a',
          400: '#36f250',
          500: '#0cdb29',
          600: '#03b61c',
          700: '#078e1a',
          800: '#0b701a',
          900: '#0c5b19',
          950: '#003309',
        },
        mercury: {
          light: '#e6e5e4',
          dark: '#262424',
        },
        sea: {
          light: '#f6f6f9',
          dark: '#25232c',
        colors: { 
          varDARKBEAKTOP: "#785001",
          varMEDBEAKTOP: "#b67902",
          varLIGHTBEAKTOP: "#fca802",
          varDARKDUCKHEAD: "#1e3b28",
          varMEDDUCKHEAD: "#284f35",
          varLIGHTDUCKHEAD: "#528f85",
          varDARKBLUEFEATHER: "#24558d",
          varMEDBLUEFEATHER: "#2a61a1",
          varLIGHTBLUEFEATHER: "#419aff",
          varDARKDUCKCHEEKS: "#362e47",
          varMEDDUCKCHEEKS: "#6b5b8d",
          varLIGHTDUCKCHEEKS: "#a088d2",
          varDARKNECK: "#412a32",
          varMEDNECK: "#98648d",
          varLIGHTNECK: "#c68199",
          varDARKWING: "#3c302e",
          varMEDWING: "#806661",
          varLIGHTWING: "#cfa69d",
          varDARKBEAK: "#70181a",
          varMEDBEAK: "#962023",
          varLIGHTBEAK: "#d72d32",
          varDARKSPACE: "#08121c",
          varMEDSPACE: "#1b3854",
          varLIGHTSPACE: "#264d73",
          varBoneWhite: "#fff9d7",
          varfreshblood: "#ed181a",
          varDCDARKBLUE: "#012344",
          varDCMEDBLUE: "#01366a",
          varDCLIGHTBLUE: "#01366a",
          varDCDARKGREY: "#484a4d",
          varDCMEDGREY: "#6b6e73",
          varDCLIGHTGREY: "#b2b7bf",
          varDCBLUEGREY: "#33485d",
        },


    

       screens: {
        'widescreen': { 'raw': '(min-aspect-ratio: 3/2)' },
        'tallscreen': { 'raw': '(max-aspect-ratio: 13/20)' },
         xxs: '320px',
         xs: '420px',
         sm: '640px',
         md: '768px',
         lg: '1024px',
         xl: '1280px',
         xxl: '1536px',
         xxxl: '1920px',
        },
        
        keyframes: {
          'open-menu-not-used': {
            '0%': { transform: 'scaleY(0)' },
            '80%': { transform: 'scaleY(01.2)' },
            '100%': { transform: 'scaleY(1)' },
          },
          },


			   animation: {
          'open-menu-not-used': 'open-menu 0.5s ease-in-out forwards'
          },
      },


    },
  },
   
 
			
			
			 
		 

        
        
        plugins: [],
      }
     
}  






        

