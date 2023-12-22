file:///C:/Fabiano/PortFólio/portifolio/html/teste.scala
### java.lang.NoClassDefFoundError: sourcecode/Name

occurred in the presentation compiler.

action parameters:
offset: 112
uri: file:///C:/Fabiano/PortFólio/portifolio/html/teste.scala
text:
```scala
@()
@estilos = {
}
@scripts = {
    <script>
            $(document).ready(function () {
                C@@.init();
            });
    </script>
}

@views.html.template.main("Area de perfil", scripts, estilos, "") {

    <div class="pagetitle">
        <h1>Perfil de usuario </h1>
        <nav>
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="index.html">Inicio</a></li>
                <li class="breadcrumb-item">Paginas</li>
                <li class="breadcrumb-item active">Pagina em Branco</li>
            </ol>
        </nav>
    </div>

    <section class="section profile d-flex">
        <div class="row">
            <div class="col-xl-12">
                <div class="card">
                    <div class="card-body">
                        <div class="card-body profile-card pt-4 d-flex flex-column align-items-center">
                            <img class="profile__picture" src="https://st2.depositphotos.com/4164031/6914/i/450/depositphotos_69145633-stock-photo-flag-of-brazil.jpg"/>
                            <h2>@usuario.getNome</h2>
                                <!--link para a redes sociais-->
                            <div class="social-links mt-2">
                                <a href="#" class="twitter">
                                    <i class="bi bi-twitter">

                                    </i>
                                </a>
                                <a href="#" class="facebook">
                                    <i class="bi bi-facebook">

                                    </i>
                                </a>
                                <a href="#" class="instagram">
                                    <i class="bi bi-instagram">

                                    </i>
                                </a> <a href="#" class="linkedin">
                                <i class="bi bi-linkedin">

                                </i>
                            </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div class="card-body">
            <div class="row">
                <div class="col-xl-12">
                    <div class="card">
                        <div class="card-body">
                            <ul class="nav nav-tabs nav-tabs-bordered" role="tablist">
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link active" data-bs-toggle="tab" data-bs-target="#profile-overview" aria-selected="true" role="tab">
                                        Visão geral</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" data-bs-toggle="tab" data-bs-target="#profile-edit" aria-selected="false" tabindex="-1" role="tab">
                                        Editar Perfil</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" data-bs-toggle="tab" data-bs-target="#profile-change-password" aria-selected="false" tabindex="-1" role="tab">
                                        Mudar senha</button>
                                </li>
                            </ul>
                            <div class="tab-content pt-2">

                                <div class="tab-pane fade show active profile-overview" id="profile-overview" role="tabpanel">

                                        <!--Dados do ussuario visivel-->

                                    <h5 class="card-title">
                                        Sobre o cadastro de Ussuario</h5>
                                    <p class="small fst-italic">
                                        Este texto serve para texte de usuario aqui voce ira poder fazer troca de dados do usuario ou troca desenha
                                        qual quer duvida emtrar em contato com o desenvolvedor do sistema desenvolvido agradecemos pelo compreensão e pelo texte
                                        no nosso sistema.</p>
                                    <h5 class="card-title">Detalhes de perfil</h5>
                                    <div class="row">
                                        <div class="col-lg-3 col-md-4 label ">Nome completo</div>
                                        <div class="col-lg-9 col-md-8">@usuario.getNome</div>
                                    </div>
                                    <div class="row"><div class="col-lg-3 col-md-4 label">Email</div>
                                        <div class="col-lg-9 col-md-8">@usuario.getEmail</div>
                                    </div>
                                </div>


                                <div class="tab-pane fade profile-edit pt-3" id="profile-edit" role="tabpanel">

                                        <!--id do forme para poder pegar os dados e validar-->

                                    <form id="formUsuarioValidacao">

                                            <!--input para alterar os dados de E-mail e nome do Usuario-->
                                        <input type="hidden" name="id" value="@usuario.getId">
                                        <div class="row mb-3">
                                            <label for="fullName" class="col-md-4 col-lg-3 col-form-label">Full Name</label>
                                            <div class="col-md-8 col-lg-9" id="nomeUsuario"> <input name="fullName" type="text" class="form-control" id="fullName" value="@usuario.getNome">
                                            </div>
                                        </div>
                                        <div class="row mb-3 d-flex">
                                            <label for="fullEmail" class="col-md-4 mt-3 col-lg-3 col-form-label">
                                                E-mail</label>
                                            <div class="col-md-8 col-lg-9" id="emailUsuario"> <input name="fullEmail" type="text" class="form-control mt-3" id="fullEmail" value="@usuario.getEmail"></div>
                                        </div>
                                        <button type="submit" class="btn btn-primary">Salvar alterações</button>
                                    </form>
                                </div>


                                <div class="tab-pane fade pt-3" id="profile-change-password" role="tabpanel">
                                    <form id="formAlterarSenha">

                                            <!--Dados da senha do ussuario para trocar a senha obtido pela id e senha do ussuario-->

                                        <input type="hidden" name="id" value="@usuario.getId">
                                        <div class="row mb-3">
                                            <label for="currentPassword" class="col-md-4 col-lg-3 col-form-label">Senha atual</label>
                                            <div class="col-md-8 col-lg-9">
                                                <input name="password" type="password" class="form-control" id="currentPassword" value="@usuario.getSenha"></div>
                                        </div>

                                        <div class="row mb-3">
                                            <label for="newpassword" class="col-md-4 col-lg-3 col-form-label">Digite a senha senha</label>
                                            <div class="col-md-8 col-lg-9">
                                                <input name="newpassword" type="newpassword" class="form-control" id="newpassword"></div>
                                        </div>

                                        <div class="row mb-3">
                                            <label for="renewPassword" class="col-md-4 col-lg-3 col-form-label">
                                                Digite novamente a senha</label>
                                            <div class="col-md-8 col-lg-9"> <input name="renewpassword" type="password" class="form-control" id="renewPassword"></div>
                                        </div>
                                        <div class="text-center">
                                            <button type="submit" class="btn btn-primary">Salvar senha</button>
                                        </div>
                                    </form>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
}
```



#### Error stacktrace:

```
scala.meta.internal.tokenizers.XmlParser$Xml$.UnpStart(XmlParser.scala:48)
	scala.meta.internal.tokenizers.XmlParser$Xml$.Unparsed(XmlParser.scala:47)
	scala.meta.internal.tokenizers.XmlParser$Xml$.XmlContent(XmlParser.scala:43)
	scala.meta.internal.tokenizers.XmlParser.$anonfun$XmlExpr$1(XmlParser.scala:24)
	scala.meta.shaded.internal.fastparse.internal.RepImpls$.rec$4(RepImpls.scala:226)
	scala.meta.shaded.internal.fastparse.internal.RepImpls$.rep$extension(RepImpls.scala:266)
	scala.meta.shaded.internal.fastparse.package$ByNameOps$.rep$extension(package.scala:202)
	scala.meta.internal.tokenizers.XmlParser.XmlExpr(XmlParser.scala:24)
	scala.meta.internal.tokenizers.LegacyScanner.$anonfun$getXml$2(LegacyScanner.scala:932)
	scala.meta.shaded.internal.fastparse.SharedPackageDefs.parseInputRaw(SharedPackageDefs.scala:69)
	scala.meta.shaded.internal.fastparse.SharedPackageDefs.parseInputRaw$(SharedPackageDefs.scala:45)
	scala.meta.shaded.internal.fastparse.package$.parseInputRaw(package.scala:6)
	scala.meta.shaded.internal.fastparse.Parsed$Extra.trace(Parsed.scala:139)
	scala.meta.shaded.internal.fastparse.Parsed$Extra.traced(Parsed.scala:118)
	scala.meta.internal.tokenizers.LegacyScanner.getXml(LegacyScanner.scala:936)
	scala.meta.internal.tokenizers.LegacyScanner.fetchLT$1(LegacyScanner.scala:295)
	scala.meta.internal.tokenizers.LegacyScanner.fetchToken(LegacyScanner.scala:303)
	scala.meta.internal.tokenizers.LegacyScanner.nextToken(LegacyScanner.scala:211)
	scala.meta.internal.tokenizers.LegacyScanner.foreach(LegacyScanner.scala:1011)
	scala.meta.internal.tokenizers.ScalametaTokenizer.uncachedTokenize(ScalametaTokenizer.scala:24)
	scala.meta.internal.tokenizers.ScalametaTokenizer.$anonfun$tokenize$1(ScalametaTokenizer.scala:17)
	scala.collection.concurrent.TrieMap.getOrElseUpdate(TrieMap.scala:962)
	scala.meta.internal.tokenizers.ScalametaTokenizer.tokenize(ScalametaTokenizer.scala:17)
	scala.meta.internal.tokenizers.ScalametaTokenizer$$anon$2.apply(ScalametaTokenizer.scala:332)
	scala.meta.tokenizers.Api$XtensionTokenizeDialectInput.tokenize(Api.scala:25)
	scala.meta.tokenizers.Api$XtensionTokenizeInputLike.tokenize(Api.scala:14)
	scala.meta.internal.pc.ScriptFirstImportPosition$.tokenize(ScriptFirstImportPosition.scala:112)
	scala.meta.internal.pc.ScriptFirstImportPosition$.skipPrefixesOffset(ScriptFirstImportPosition.scala:62)
	scala.meta.internal.pc.ScriptFirstImportPosition$.skipUsingDirectivesOffset(ScriptFirstImportPosition.scala:59)
	scala.meta.internal.pc.AutoImports$.forScalaSource$1$$anonfun$1(AutoImports.scala:324)
	scala.Option.map(Option.scala:242)
	scala.meta.internal.pc.AutoImports$.forScalaSource$1(AutoImports.scala:334)
	scala.meta.internal.pc.AutoImports$.autoImportPosition$$anonfun$1(AutoImports.scala:376)
	scala.Option.orElse(Option.scala:477)
	scala.meta.internal.pc.AutoImports$.autoImportPosition(AutoImports.scala:376)
	scala.meta.internal.pc.AutoImports$.generator(AutoImports.scala:98)
	scala.meta.internal.pc.completions.CompletionProvider.completions(CompletionProvider.scala:70)
	scala.meta.internal.pc.ScalaPresentationCompiler.complete$$anonfun$1(ScalaPresentationCompiler.scala:136)
```
#### Short summary: 

java.lang.NoClassDefFoundError: sourcecode/Name