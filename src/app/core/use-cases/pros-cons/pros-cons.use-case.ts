import { environment } from 'environments/environment';

export const prosConsUseCase = async ( prompt: string ) => {

  try {
    const resp = await fetch( `${ environment.backendApi }/pros-cons-discusser`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify( { prompt } ),
    } );

    if ( !resp.ok ) throw new Error( 'No se pudo realizar la comparación. Inténtalo de nuevo.' );

    const response = await resp.json();

    return {
      ok: true,
      content: response.content,
    };
  } catch ( error ) {
    console.log( error );
    return {
      ok: false,
      content: 'No se pudo realizar la comparación. Inténtalo de nuevo.',
    };

  }

};
