import { environment } from 'environments/environment';

export async function* prosConsStreamUseCase( prompt: string, abortSignal: AbortSignal ) {

  try {
    const resp = await fetch( `${ environment.backendApi }/pros-cons-discusser-stream`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify( { prompt } ),
      signal: abortSignal,
    } );

    if ( !resp.ok ) throw new Error( 'No se pudo realizar la comparación. Inténtalo de nuevo.' );

    const reader = resp.body?.getReader();

    if ( !reader ) throw new Error( 'No se pudo realizar la comparación. Inténtalo de nuevo.' );

    const decoder = new TextDecoder();
    let result = '';

    while ( true ) {
      const { value, done } = await reader.read();

      if ( done ) break;

      result += decoder.decode( value, { stream: true } );
      yield result;
    }

    return result;
  } catch ( error ) {
    console.log( error );
    return null;
  }
}
